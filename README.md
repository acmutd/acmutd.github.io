# ACM Website

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, create a `.env` located in the project root with the following fields:

- `EVENT_SPREADSHEET_ID` the ID of the Google Sheets calendar
- `GOOGLE_SHEETS_PRIVATE_KEY` the private key of a valid Google Sheets API service account
- `GOOGLE_SHEETS_CLIENT_EMAIL` the email of the valid Google Sheets API service account

Second, run the development server:

```bash
npm run dev
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
