# LMS
Learning Management System - Basic secure restful API framework

Can be accessed at https://aqueous-journey-57962.herokuapp.com/

LOCAL BUILD STEPS 

Install postgress locally

create a Upworld-dev db.

Clone the project then runn 'npm install' from command line in project folder to pull all of Node requirements.

edit Auth0-variables.js and switch the Callback commented out line for localhost with Heroku

Edit the 'test' settings in /server/config/config.json for your local postgress setup

rename the example.env to .env

create tables in postgress by running 'c:/projects/lms/node_modules/.bin/sequelize db:migrate --env test' from server folder in Command line (NOTE: change projects/lms to your project file location)   

Use 'npm Start' or on OSX use 'npm istart' to run locally.

Unit & Integrated tests are run from 'npm test' (NOTE: I installed Mocha, Chai and Chai-http globally with NPM INSTALL -g ...)
