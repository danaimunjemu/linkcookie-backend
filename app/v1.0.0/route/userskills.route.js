const UserSkillsController = require("./../controller/userskills.controller");
module.exports = (app) => {
  app.post("/api/userskills", UserSkillsController.create);
  app.get("/api/userskills/:id", UserSkillsController.findOne);
  app.get("/api/userskills", UserSkillsController.findAll);
  app.put("/api/userskills/:id", UserSkillsController.update);
  app.delete("/api/userskills/:id", UserSkillsController.delete);
};