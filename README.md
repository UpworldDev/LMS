# LMS
Learning Management System - Basic secure restful API framework

Can be accessed at https://aqueous-journey-57962.herokuapp.com/

LOCAL BUILD STEPS 

Install postgress locally

create a Upworld-dev db.

Clone the project then runn 'npm install' from command line in project folder to pull all of Node requirements.

edit Auth0-variables.js and switch the Callback commented out line for localhost with Heroku

Edit the 'test' settings in /server/config/config.json for your local postgress setup

create tables in postgress by running '../node_modules/bin/sequelize db:migrate' from server folder in Command line  

Use 'npm Start' to run locally.

Unit & Integrated tests are run from npm test (NOTE: I installed Mocha, Chai and Chai-http globally with NPM INSTALL -g ...)