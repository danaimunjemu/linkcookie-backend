const IndividualUserController = require("./../controller/individualuser.controller");
module.exports = (app) => {
  app.post("/api/individualuser", IndividualUserController.create);
  app.get("/api/individualuser/:id", IndividualUserController.findOne);
  app.get("/api/individualuser", IndividualUserController.findAll);
  app.put("/api/individualuser/:id", IndividualUserController.update);
  app.delete("/api/individualuser/:id", IndividualUserController.delete);
};