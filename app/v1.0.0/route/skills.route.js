const SkillsController = require("./../controller/skills.controller");
module.exports = (app) => {
  app.post("/api/skills", SkillsController.create);
  app.get("/api/skills/:id", SkillsController.findOne);
  app.get("/api/skills", SkillsController.findAll);
  app.put("/api/skills/:id", SkillsController.update);
  app.delete("/api/skills/:id", SkillsController.delete);
};