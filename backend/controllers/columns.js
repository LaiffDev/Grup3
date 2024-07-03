rechargeColumn = require('../models/').recharge_column

module.exports = {
  index(req, res) {
    rechargeColumn.findAll()
      .then((rechargeColumn) => {
        res.status(200).json(rechargeColumn)
      })
      .catch((error) => {
        res.status(500).json(error)
      })
  },

  show(req, res) {
    rechargeColumn.findByPk(req.params.id)
      .then((rechargeColumn) => {
        res.status(200).json(rechargeColumn)
      })
      .catch((error) => {
        res.status(500).json(error)
      })
  },

  create(req, res) {
    rechargeColumn.create(req.body)
      .then((newrechargeColumn) => {
        res.status(200).json(newRechargeColumn)
      })
      .catch((error) => {
        res.status(500).json(error)
      })
  },

  update(req, res) {
    rechargeColumn.update(req.body)
      .then((updatedRecords) => {
        res.status(200).json(updatedRecords)
      })
      .catch((error) => {
        res.status(500).json(error)
      })
  },

  delete(req, res) {
    rechargeColumn.destroy({
      where: {
        id: req.params.id
      }
    })
      .then((deletedRecords) => {
        res.status(200).json(deletedRecords)
      })
      .catch.catch((error) => {
        res.status(500).json(error)
    })
  }
}