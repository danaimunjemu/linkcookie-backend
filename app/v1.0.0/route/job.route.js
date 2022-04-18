const JobController = require("./../controller/job.controller");
module.exports = (app) => {
  app.post("/api/job", JobController.create);
  app.get("/api/job/:id", JobController.findOne);
  app.get("/api/job", JobController.findAll);
  app.put("/api/job/:id", JobController.update);
  app.delete("/api/job/:id", JobController.delete);
};