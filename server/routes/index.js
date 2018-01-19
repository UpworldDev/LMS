const cors = require('cors')
const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const jwtAuthz = require('express-jwt-authz');
const ModelHandler = require('../functions/handler');

const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and 
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://upworld.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'upworld',
  issuer: `https://upworld.auth0.com/`,
  algorithms: ['RS256']
});

const checkScopes = jwtAuthz(['read:messages']);

router.all('*', cors());

router.get('/public', function(req, res) {
  res.json({
    message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
  });
});

router.get('/private', checkJwt, checkScopes, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
  });
});

const personsController = require('../controllers').persons;
const assessmentsController = require('../controllers').assessments;

const assessmentsHandler = new ModelHandler(require('../models').Assessment);
const contactsHandler = new ModelHandler(require('../models').Contact);
const pointsHandler = new ModelHandler(require('../models').Point);
const pointHistoriesHandler = new ModelHandler(require('../models').PointHistory);
const studentsHandler = new ModelHandler(require('../models').Student);
const attendancesHandler = new ModelHandler(require('../models').Attendance);

router.get('/', (req, res, next) => res.status(200).send({
  message: 'Welcome to the API!'
}));

router.get('/persons', personsController.list);                                           // No Security on Restfull Endpoint
router.post('/persons', personsController.create);
router.get('/persons/:personId', personsController.retrieve);
router.put('/persons/:personId', personsController.update);
router.delete('/persons/:personId', personsController.destroy);

router.get('/students/assessments', personsController.listStudentAssessments);

router.post('/persons/:personId/assessments', assessmentsHandler.create());                // Uses new dynamic Model 
router.put('/persons/:personId/assessments/:assessmentId', assessmentsController.update); // Uses hard code model for special business rules
router.delete('/persons/:personId/assessments/:assessmentId', assessmentsController.destroy);

router.post('/persons/:personId/contacts', contactsHandler.create());
router.get('/persons/:personId/contacts/:id', contactsHandler.get());
router.get('/persons/:personId/contacts', contactsHandler.query());
router.delete('/persons/:personId/contacts/:id', contactsHandler.remove());
router.put('/persons/:personId/contacts/:id', contactsHandler.update());

router.post('/persons/:personId/attendances', attendancesHandler.create());
router.get('/persons/:personId/attendances/:id', attendancesHandler.get());
router.get('/persons/:personId/attendances', attendancesHandler.query());
router.delete('/persons/:personId/attendances/:id', attendancesHandler.remove());
router.put('/persons/:personId/attendances/:id', attendancesHandler.update());
router.post('/persons/:personId/bulkAttendances', attendancesHandler.bulkCreate());

/*
router.get('/persons', checkJwt, checkScopes, personsController.list);                      // Secured Restfull Endpoint
router.post('/persons', checkJwt, checkScopes, personsController.create);
router.get('/persons/:personId', checkJwt, checkScopes, personsController.retrieve);
router.put('/persons/:personId', checkJwt, checkScopes, personsController.update);
router.delete('/persons/:personId', checkJwt, checkScopes, personsController.destroy);

router.post('/persons/:personId/assessments', checkJwt, checkScopes, assessmentsController.create);
router.put('/persons/:personId/assessments/:assessmentId', checkJwt, checkScopes, assessmentsController.update);
router.delete('/persons/:personId/assessments/:assessmentId', checkJwt, checkScopes, assessmentsController.destroy);
*/
// For any other request method on assessment items, we're going to return "Method Not Allowed"
router.all('/persons/:personId/assessments', (req, res, next) =>
  res.status(405).send({
    message: 'Method Not Allowed'
  })
);

module.exports = router;
