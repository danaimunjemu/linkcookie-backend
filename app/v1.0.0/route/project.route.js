const ProjectController = require("./../controller/project.controller");
module.exports = (app) => {
  app.post("/api/project", ProjectController.create);
  app.get("/api/project/:id", ProjectController.findOne);
  app.get("/api/project", ProjectController.findAll);
  app.put("/api/project/:id", ProjectController.update);
  app.delete("/api/project/:id", ProjectController.delete);
};