rechargeColumns = require('../models/').recharge_column

module.exports = {
  index(req, res) {
    rechargeColumns.findAll()
      .then((rechargeColumns) => {
        res.status(200).json(rechargeColumns)
      })
      .catch((error) => {
        res.status(500).json(error)
      })
  },

  show(req, res) {
    rechargeColumns.findByPk(req.params.id)
      .then((rechargeColumns) => {
        res.status(200).json(rechargeColumns)
      })
      .catch((error) => {
        res.status(500).json(error)
      })
  },

  create(req, res) {
    rechargeColumns.create(req.body)
      .then((newRechargeColumns) => {
        res.status(200).json(newRechargeColumn)
      })
      .catch((error) => {
        res.status(500).json(error)
      })
  },

  update(req, res) {
    rechargeColumns.update(req.body)
      .then((updatedRecords) => {
        res.status(200).json(updatedRecords)
      })
      .catch((error) => {
        res.status(500).json(error)
      })
  },

  delete(req, res) {
    rechargeColumns.destroy({
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