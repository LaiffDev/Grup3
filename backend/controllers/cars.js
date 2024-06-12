Car = require('../models').car;

module.exports = {
  // Get a list of all Users using model.findAll()
  index(req, res) {
    Car.findAll()
      .then((User) => {
        res.status(200).json(User);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },

  // Get an User by the unique ID using model.findById()
  show(req, res) {
    Car.findByPk(req.params.id)
    .then((User) => {
      res.status(200).json(User);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
  },

  // Create a new User using model.create()
  create(req, res) {
    Car.create(req.body)
      .then((newUser) => {
        res.status(200).json(newUser);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },

  // Edit an existing User details using model.update()
  update(req, res) {
    Car.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then((updatedRecords) => {
      res.status(200).json(updatedRecords);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
  },

  // Delete an existing User by the unique ID using model.destroy()
  delete(req, res) {
    Car.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((deletedRecords) => {
      res.status(200).json(deletedRecords);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
  }
};