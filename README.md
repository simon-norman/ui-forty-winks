# UI Forty Winks

This is the frontend for the forty winks app. Forty Winks enables users to book shelter accommodation for homeless people. 

The production version is here: https://ui-forty-winks.herokuapp.com/. 

The backend api repository can be found here: https://github.com/simon-norman/api-forty-winks

## How to run

### In development mode: `npm start-dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### To run tests, run `npm start-dev` then (once app running) `npm run feature-test`

This will open up browser and run tests using Cypress. 

## How to deploy

All Heroku deployments can be found in the Cookie Dough team site here: https://dashboard.heroku.com/teams/cookie-dough/apps. 

Merging / committing to staging will trigger a build to the Heroku test environment. 

Merging / committing to master will trigger a build to the Heroku production environment. 

All merges and commits trigger a Codeship CI, which will also run the Cypress tests. Heroku will not deploy to production until these tests pass. 


## User stories / tickets / backlog

https://trello.com/b/pG7HmCwX/team-cookie-dough
