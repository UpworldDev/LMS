var express = require('express');
var router = express.Router();

require('dotenv').config();

var ManagementClient = require('auth0').ManagementClient;
var management = new ManagementClient({
  domain: 'upworld.auth0.com',
  clientId: process.env.CLIENT_ID ,
  clientSecret: process.env.CLIENT_SECRET
});

/* create user */
router.post('/', function(req, res, next) {
  management.createUser({
    "connection": "Username-Password-Authentication",
    "email": req.body.email,
    "password": req.body.password,
    "verify_email": true,
  }, 
   function (err, user) {
    if (err) {
      res.status(400).send({message: 'User Create Failed! ', err});
      console.log(err);  // handle error.
    } else {
      res.status(200).send({message: 'User Created Successfully! ', user});
      console.log(user);
    };
  });
});

/*
management.getUsers( function (err, user) {
  if (err) {
    console.log(err);  // handle error.
  }
  console.log(user);
});
*/
module.exports = router;