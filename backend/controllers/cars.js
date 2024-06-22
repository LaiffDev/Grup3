Car = require('../models').car;

module.exports = {
  // Get a list of all Cars using model.findAll()
  index(req, res) {
    Car.findAll()
      .then((Car) => {
        res.status(200).json(Car);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },

  indexUsersCar(req, res) {
    Car.findOne({
      where: {
        owner_id: req.params.user_id
      }
    })
      .then((Car) => {
        res.status(200).json(Car)
      })
      .catch((error) => {
        res.status(500).json(error)
      })
  },

  // Get a Car by the unique PLATE using model.findByPk()
  show(req, res) {
    Car.findByPk(req.params.plate)
    .then((Car) => {
      res.status(200).json(Car);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
  },

  // Create a new Cars using model.create()
  // owner_id da popolare
  create(req, res) {
    Car.create(req.body)
      .then((newCar) => {
        res.status(200).json(newCar);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },

  // Edit an existing Car details using model.update()
  update(req, res) {
    Car.update(req.body, {
      where: {
        plate: req.params.plate
      }
    })
    .then((updatedRecords) => {
      res.status(200).json(updatedRecords);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
  },

  // Delete an existing Car by the unique ID using model.destroy()
  delete(req, res) {
    Car.destroy({
      where: {
        plate: req.params.plate
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