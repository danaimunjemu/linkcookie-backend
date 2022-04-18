const CorporateUserController = require("./../controller/corporateuser.controller");
module.exports = (app) => {
  app.post("/api/corporateuser", CorporateUserController.create);
  app.get("/api/corporateuser/:id", CorporateUserController.findOne);
  app.get("/api/corporateuser", CorporateUserController.findAll);
  app.put("/api/corporateuser/:id", CorporateUserController.update);
  app.delete("/api/corporateuser/:id", CorporateUserController.delete);
};