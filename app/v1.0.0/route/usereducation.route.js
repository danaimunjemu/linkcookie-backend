const UserEducationController = require("./../controller/usereducation.controller");
module.exports = (app) => {
  app.post("/api/usereducation", UserEducationController.create);
  app.get("/api/usereducation/:id", UserEducationController.findOne);
  app.get("/api/usereducation", UserEducationController.findAll);
  app.put("/api/usereducation/:id", UserEducationController.update);
  app.delete("/api/usereducation/:id", UserEducationController.delete);
};