import { Component } from 'react';
import Info from '../components/Info';
import Calendar from '../components/Calendar';
import ImageCarousel from '../components/ImageCarousel';
import { getRegisteredTeams, getRegisteredPrograms } from '../util/cms';
import { google } from 'googleapis';
import { createEvents } from 'ics';
import {
  LocalDate,
  LocalTime,
  ZonedDateTime,
  ZoneId,
  ZoneOffset,
} from '@js-joda/core';
import '@js-joda/timezone';

async function getSpreadsheet() {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_SHEETS_PRIVATE_KEY,
      target,
    );
    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.EVENT_SPREADSHEET_ID,
      range: 'Events',
    });
    const sheet = res.data.values;
    function to24hour(time12) {
      const [time, period] = time12.split(' ');
      const [hour, minute] = time.split(':');

      let hourInt = parseInt(hour);
      if (period == 'PM' && hourInt < 12) hourInt += 12;
      else if (period == 'AM' && hourInt == 12) hourInt = 0;

      return `${String(hourInt).padStart(2, '0')}:${minute}`;
    }
    function toDateArray(ldt) {
      return [
        ldt.year(),
        ldt.monthValue(),
        ldt.dayOfMonth(),
        ldt.hour(),
        ldt.minute(),
      ];
    }
    function rowToEvent(row) {
      let EXPECTED_COLUMNS = [
        'Date',
        'End Date',
        'Day of Week',
        'Start Time',
        'End Time',
        'Name',
        'Description',
        'Location',
        'Division',
        'Collaborator(s)',
        'Public',
      ];
      function getValue(column) {
        return row[EXPECTED_COLUMNS.indexOf(column)];
      }
      function parseDate(dateCol, timeCol) {
        const localDate = LocalDate.parse(getValue(dateCol));
        const localTime = LocalTime.parse(to24hour(getValue(timeCol)));
        const chicagoDateTime = ZonedDateTime.of(
          localDate,
          localTime,
          ZoneId.of('America/Chicago'),
        );
        return chicagoDateTime.withZoneSameInstant(ZoneOffset.UTC);
      }
      if (!row || row[EXPECTED_COLUMNS.indexOf('Public')] != 'TRUE')
        return undefined;
      return {
        start: parseDate('Date', 'Start Time'),
        end: parseDate('End Date', 'End Time'),
        name: getValue('Name'),
        description: getValue('Description'),
        public: getValue('Public') == 'TRUE',
      };
    }
    function spreadsheetToEvents(spreadsheet) {
      spreadsheet.shift();
      return spreadsheet.map(rowToEvent);
    }
    let events = spreadsheetToEvents(sheet);
    const includedEvents = events.filter((e) => e && e.public);
    const { error, value } = createEvents(
      includedEvents.map((e) => {
        return {
          calName: 'ACM Events',
          start: toDateArray(e.start),
          end: toDateArray(e.end),
          title: e.name,
          description: e.description,
          startInputType: 'utc',
          endInputType: 'utc',
          startOutputType: 'utc',
          endOutputType: 'utc',
        };
      }),
    );
    return value;
  } catch (err) {
    console.log(err);
  }
}

export default class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { events, data } = this.props;
    return (
      <div>
        <div className="mt-6 text-2xl font-black text-center md:text-4xl">
          Association for Computing Machinery
        </div>
        <div className="text-xl font-bold text-center md:text-2xl">
          We're just a group of people...
        </div>
        <ImageCarousel className="w-3/4 mx-auto my-8" images={data.images} />
        <div className="mx-auto mt-8 mb-10 flex flex-wrap justify-center w-4/5 lg:flex-nowrap">
          <Info title="Who we are" body={data.who} />
          <Info title="What we do" body={data.what} />
        </div>
        <Calendar events={events} />
      </div>
    );
  }
}
export async function getStaticProps() {
  const sanity = require('@sanity/client');
  const ical = require('node-ical');
  const client = sanity({
    projectId: 'l82yvvx0',
    dataset: 'production',
    apiVersion: '2019-01-29',
    useCdn: false,
  });
  const registeredTeams = await getRegisteredTeams();
  const registeredPrograms = await getRegisteredPrograms();
  let data;
  await client
    .fetch('*[_type == "homepage"]{who, what, "images": images[].asset->url}')
    .then((page) => (data = page[0]));

  const icsdata = await getSpreadsheet();
  const eventdata = ical.sync.parseICS(icsdata);
  const events = [];
  for (const [key, value] of Object.entries(eventdata)) {
    if (value.type != 'VEVENT') continue;
    events.push({
      name: value.summary,
      description: value.description || '',
      start: value.start.toISOString(),
      end: value.end.toISOString(),
    });
  }
  return {
    props: { data, registeredTeams, registeredPrograms, events },
  };
}
