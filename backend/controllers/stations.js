const rechargeStation = require("../models").recharge_station;

module.exports = {
  index(req, res) {
    rechargeStation
      .findAll()
      .then((rechargeStation) => {
        res.status(200).json(rechargeStation);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
};
