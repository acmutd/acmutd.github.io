import DevProject from '../components/DevProject'
import Navigation from '../components/Navigation'
import Timeline from '../components/Timeline'
import Calendar from '../components/Calendar'
import Footer from '../components/Footer'
export default function Test() {
  return (
    <div
      id="projects"
      style={{
        backgroundColor: '#161616',
        padding: '50px',
        alignItems: 'center',
      }}
    >
      <Navigation />
      <DevProject
        key="test"
        title="Discord Bot"
        tag="Useful automation for everyone in ACM..."
        contributors={[
          'Jafar Ali',
          'Eric Zhang',
          'Nick Burnett',
          'Willie Chalmers III',
        ]}
        description="Coded in TypeScript, the ACM Discord Bot is the cornerstone to all the functionality available in the official ACM Discord."
        repo="acmutd/acm-bot"
        link="https://github.com/acmutd/acm-bot"
      />
      <Timeline
        events={[
          {
            semester: 'Summer 2021',
            title: 'Still Procrastinating xDDD',
            description:
              'So I am only now just starting and completing the component library. Since the mockups are not completely finished, desktop and mobile alike, some of the component CSS and content will change depending on how Willie responds to the current layout.',
            media: [
              {
                url: 'https://wallpaperaccess.com/full/99987.jpg',
              },
            ],
          },
          {
            semester: 'Fall 2021',
            title: 'Website Release',
            description: 'The website will be released ????',
            media: [
              {
                url: 'https://wallpaperaccess.com/full/99987.jpg',
                width: '20%',
                height: '20%',
              },
              {
                url: 'https://wolf-wallpapers.pro/images/cool-wolf-backgrounds-11071-hd-wallpapers-in-animals-1-4-wolf-wallpapers.pro.jpg',
                width: '20em',
                height: '15em',
              },
              {
                url: 'https://wolf-wallpapers.pro/images/cool-wolf-backgrounds-11071-hd-wallpapers-in-animals-1-4-wolf-wallpapers.pro.jpg',
                width: '25em',
                height: '20em',
              },
            ],
          },
          {
            semester: 'Spring 2022',
            title:
              'Nick gets fired cuz he cannot figure out how to do the line xDDDD',
            description:
              'Nick is sad because he cannot figure out how to do the line :((Nick is sad because he cannot figure out how to do the line :((Nick is sad because he cannot figure out how to do the line :((Nick is sad because he cannot figure out how to do the line :((Nick is sad because he cannot figure out how to do the line :((Nick is sad because he cannot figure out how to do the line :((Nick is sad because he cannot figure out how to do the line :((Nick is sad because he cannot figure out how to do the line :(( I may have a way to do it but it is very inelegant and im too tired to do it tonight :DD',
            media: [],
          },
        ]}
      />
      <Calendar />
      <Footer />
    </div>
  )
}
