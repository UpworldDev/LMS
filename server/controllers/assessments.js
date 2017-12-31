const Assessment = require('../models').Assessment;

module.exports = {
  create(req, res) {
    return Assessment
      .create({
        assessmentName: req.body.assessmentName,
        value: req.body.value,
        studentId: req.params.personId
      })
      .then(assessment => res.status(201).send(assessment))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Assessment
      .all()
      .then(assessments => res.status(200).send(assessments))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Assessment
      .findById(req.params.assessmentId, {})
      .then(assessment => {
        if (!assessment) {
          return res.status(404).send({
            message: 'Assessment Not Found'
          });
        }
        return res.status(200).send(assessment);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Assessment
      .findById(req.params.assessmentId)
      .then(assessment => {
        if (!assessment) {
          return res.status(404).send({
            message: 'Assessment Not Found'
          });
        }
        return assessment
          .update(req.body, { fields: Object.keys(req.body) })
          .then(() => res.status(200).send(assessment))  // Send back the updated assessment.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Assessment
      .findById(req.params.assessmentId)
      .then(assessment => {
        if (!assessment) {
          return res.status(400).send({
            message: 'Assessment Not Found'
          });
        }
        return assessment
          .destroy()
          .then(() => res.status(200).send({ message: 'Assessment deleted successfully.' }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};