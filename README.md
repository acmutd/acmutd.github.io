# ACM Website

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Setting up the Calendar

To set up the calendar for the website, create a `.env` in the root project directory and fill out the following key-value pairs:

- `EVENT_SPREADSHEET_ID` the ID of the Google Sheets calendar
- `GOOGLE_SHEETS_PRIVATE_KEY` the private key of a valid Google Sheets API service account
- `GOOGLE_SHEETS_CLIENT_EMAIL` the email of the valid Google Sheets API service account
  To setup the Google Sheets authentication, navigate to the Google Cloud Platform, and select **Calendar Converter** as the current project context. Navigate to **IAM & Admin -> Service Accounts**. Next, select the `calendar-converter@...` service account. Click **Keys** at the top and create a new key with **ADD KEY -> Create new key**. Select _JSON_ and create the key. The authentication file will download automatically. After the download has completed, copy the _entire_ value of **private_key** and assign the value to `GOOGLE_SHEETS_PRIVATE_KEY`. Next, copy the _entire_ value of **client_email** and assign the value to `GOOGLE_SHEETS_CLIENT_EMAIL`.

Once the Google Sheets authentication is complete, navigate to the appropriate event calendar spreadsheet. Copy the spreadsheet ID and assign the value to `EVENT_SPREADSHEET_ID`. To locate the spreadsheet ID, use the spreadsheet URL. Example: _https://docs.google.com/spreadsheets/d/1YcW-iqI6eWZ3vr8lhtLC9M5A8Qg4BBp9_BH0IaR2vXM/edit#gid=2041651241_ where the spreadsheet ID is `1YcW-iqI6eWZ3vr8lhtLC9M5A8Qg4BBp9_BH0IaR2vXM`.

### Running Locally

To run the website locally, clone the repository and install the NodeJS dependencies:

```bash
git clone https://github.com/acmutd/acmutd.github.io.git acmwebsite && cd acmwebsite # Clone the repo and change your working directory
npm i # Install the NodeJS dependencies
```

After you have installed the dependencies and set up the calendar, run the development server:

```bash
npm run dev # Run the development server
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Sanity

To run a local Sanity Studio, do the following:

```bash
cd sanity
sanity login # Must have a valid account with access to the CMS workspace.
sanity start
```

Open [http://localhost:3333](http://localhost:3333) with your browser to begin interacting with the CMS backend.

## Sanity Schemas

Each Sanity schema has a number of documents associated with it. A sanity schema is essentially a framework for how a specific document should look content-wise. This project has 4 main schemas:

- Officer
- Project
- Team
- Program

Each main schema will have documents with content that are loaded into each webpage at build-time to provide for quick changes, customization, and maintanence. Each single-page schema (HomePage, JoinPage, etc.) has a single document to define the page's content. **It is crucial that only a single document is published to each of these schema!**

#### Team Page

Each team's page allows for officers, projects, images, and past events to be specified and rendered dynamically in order to give Directors the ability to personalize their team page. Officer and Project content will be references to documents created in the _Officer_ and _Project_ schema in order to allow multiple uses across teams and programs. Before the production build of the website, team pages will be rehauled to allow for **_extensive_** configuration in areas such as component order, content visibility, and more.

#### Program Page

Each program page allows for basic informational content, past submissions/artifacts, and testimonials from participants to aid in its portrayal.

#### Project

Each project document will allow for the name, small tag-line, short description, long description (used for overlay view), contributor list (names for now), and GitHub link for those interested in viewing the project more in-depth.

## Deployment

This website automatically deploys to [Vercel](https://vercel.com) on push to
this repository's default branch.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment)
for more details.
