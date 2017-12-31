const Person = require('../models').Person;

module.exports = {
  create(req, res) {
    return Person
      .create({
        userType: req.body.userType,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        isHispanic: req.body.isHispanic,
        race: req.body.race,
        gender: req.body.gender
      })
      .then(person => res.status(201).send(person))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Person
      .all()
      .then(persons => res.status(200).send(persons))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Person
      .findById(req.params.personId, {})
      .then(person => {
        if (!person) {
          return res.status(404).send({
            message: 'Person Not Found'
          });
        }
        return res.status(200).send(person);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Person
      .findById(req.params.personId)
      .then(person => {
        if (!person) {
          return res.status(404).send({
            message: 'Person Not Found'
          });
        }
        return person
          .update(req.body, { fields: Object.keys(req.body) })
          .then(() => res.status(200).send(person))  // Send back the updated person.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Person
      .findById(req.params.personId)
      .then(person => {
        if (!person) {
          return res.status(400).send({
            message: 'Person Not Found'
          });
        }
        return person
          .destroy()
          .then(() => res.status(200).send({ message: 'Person deleted successfully.' }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
};