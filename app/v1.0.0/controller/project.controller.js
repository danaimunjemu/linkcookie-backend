const ProjectModel = require("../model/project.model");

exports.create = async (req, res) => {
  new ProjectModel(req.body)
    .save()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
exports.update = (req, res) => {
  ProjectModel
    .findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

exports.findOne = (req, res) => {
  ProjectModel
    .findById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

exports.findAll = (req, res) => {
  ProjectModel
    .find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

exports.delete = (req, res) => {
  ProjectModel
    .findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
