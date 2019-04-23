# UI Forty Winks

This is the frontend for the forty winks app. Forty Winks enables users to book shelter accommodation for homeless people.

The production version is here: https://ui-forty-winks.herokuapp.com/.

The backend api repository can be found here: https://github.com/simon-norman/api-forty-winks

## How to run

### In development mode: `npm run start-dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### To run tests, run `npm run start-dev` then (once app running) `npm run feature-test`

This will open up browser and run tests using Cypress.

## How to deploy

All Heroku deployments can be found in the Cookie Dough team site here: https://dashboard.heroku.com/teams/cookie-dough/apps.

We have two key branches, staging and master. We create branches for each feature from staging, and then merge to staging from each feature branch after each passing unit test. Once we have enough functionality for a release (e.g. a new feature as been added), we will push it to master via a pull request.

All merges and commits trigger a Codeship CI, which will also run the Cypress tests. Heroku will not deploy to production until the push to master passes CI.  

Merging / committing to staging will trigger a build to the Heroku test environment.

Merging / committing to master will trigger a build to the Heroku production environment.

## User stories / tickets / backlog

https://trello.com/b/pG7HmCwX/team-cookie-dough
