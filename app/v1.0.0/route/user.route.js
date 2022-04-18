const UserController = require("./../controller/user.controller");
const checkAuth = require("../helper/jwt.helper");

module.exports = (app) => {
  app.post("/api/user", UserController.create);
  app.get("/api/user/:id", UserController.findOne);
  app.get("/api/user", UserController.findAll);
  app.put("/api/user/:id", UserController.update);
  app.delete("/api/user/:id", UserController.delete);
  app.post("/api/authenticate", UserController.authenticate);
};
