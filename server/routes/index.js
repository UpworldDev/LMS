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
const classesHandler = new ModelHandler(require('../models').Class);
const classAttendancesHandler = new ModelHandler(require('../models').ClassAttendance);
const classMembersHandler = new ModelHandler(require('../models').ClassMember);
const coursesHandler = new ModelHandler(require('../models').Course);
const teachersHandler = new ModelHandler(require('../models').Teacher);
const termsHandler = new ModelHandler(require('../models').Term);


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

router.post('/students', studentsHandler.create());
router.get('/students/:studentId', studentsHandler.get());
router.get('/students/', studentsHandler.query());
router.delete('/students/:studentId', studentsHandler.remove());
router.put('/students/:studentId/', studentsHandler.update());
router.post('/students/bulk', studentsHandler.bulkCreate());

router.post('/courses', coursesHandler.create());
router.get('/courses/:courseId', coursesHandler.get());
router.get('/courses/', coursesHandler.query());
router.delete('/courses/:courseId', coursesHandler.remove());
router.put('/courses/:courseId/', coursesHandler.update());
router.post('/courses/bulk', coursesHandler.bulkCreate());

router.post('/terms', termsHandler.create());
router.get('/terms/:id', termsHandler.get());
router.get('/terms/', termsHandler.query());
router.delete('/terms/:id', termsHandler.remove());
router.put('/terms/:id/', termsHandler.update());
router.post('/terms/bulk', termsHandler.bulkCreate());

router.post('/teachers', teachersHandler.create());
router.get('/teachers/:id', teachersHandler.get());
router.get('/teachers/', teachersHandler.query());
router.delete('/teachers/:id', teachersHandler.remove());
router.put('/teachers/:id/', teachersHandler.update());
router.post('/teachers/bulk', teachersHandler.bulkCreate());

router.post('/classes', classesHandler.create());
router.get('/classes/:id', classesHandler.get());
router.get('/classes/', classesHandler.query());
router.delete('/classes/:id', classesHandler.remove());
router.put('/classes/:id/', classesHandler.update());
router.post('/classes/bulk', classesHandler.bulkCreate());

router.post('/classes/:classId/students/:studentId', classMembersHandler.createFromParams());
router.get('/classes/:classId/students/', classMembersHandler.query());
router.delete('/classes/:classId/students/:studentId', classMembersHandler.remove());

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
