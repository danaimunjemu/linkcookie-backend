const AdvertModel = require("../model/advert.model");

exports.create = async (req, res) => {
  new AdvertModel(req.body)
    .save()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
exports.update = (req, res) => {
  AdvertModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

exports.findOne = (req, res) => {
  AdvertModel
    .findById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

exports.findAll = (req, res) => {
  AdvertModel
    .find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

exports.delete = (req, res) => {
  AdvertModel
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
