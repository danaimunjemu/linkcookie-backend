const UserSkillsModel = require("../model/userskills.model");

exports.create = async (req, res) => {
  new UserSkillsModel(req.body)
    .save()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
exports.update = (req, res) => {
  UserSkillsModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

exports.findOne = (req, res) => {
  UserSkillsModel
    .findById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

exports.findAll = (req, res) => {
  UserSkillsModel
    .find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

exports.delete = (req, res) => {
  UserSkillsModel
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
