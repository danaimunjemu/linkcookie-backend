const UserExperienceModel = require("../model/userexperience.model");

exports.create = async (req, res) => {
  new UserExperienceModel(req.body)
    .save()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
exports.update = (req, res) => {
  UserExperienceModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

exports.findOne = (req, res) => {
  UserExperienceModel
    .findById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

exports.findAll = (req, res) => {
  UserExperienceModel
    .find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

exports.delete = (req, res) => {
  UserExperienceModel
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
