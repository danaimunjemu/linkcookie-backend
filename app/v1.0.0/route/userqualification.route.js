const UserQualificationController = require("./../controller/userqualification.controller");
module.exports = (app) => {
  app.post("/api/userqualification", UserQualificationController.create);
  app.get("/api/userqualification/:id", UserQualificationController.findOne);
  app.get("/api/userqualification", UserQualificationController.findAll);
  app.put("/api/userqualification/:id", UserQualificationController.update);
  app.delete("/api/userqualification/:id", UserQualificationController.delete);
};