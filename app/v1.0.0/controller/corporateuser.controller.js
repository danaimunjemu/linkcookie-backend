const CorporateUserModeil = require("../model/corporateuser.model");

exports.create = async (req, res) => {
  new CorporateUserModeil(req.body)
    .save()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
exports.update = (req, res) => {
  CorporateUserModeil
    .findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

exports.findOne = (req, res) => {
  CorporateUserModeil
    .findById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

exports.findAll = (req, res) => {
  CorporateUserModeil
    .find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

exports.delete = (req, res) => {
  CorporateUserModeil
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
