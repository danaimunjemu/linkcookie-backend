const AdvertSkillsController = require("./../controller/advertskills.controller");
module.exports = (app) => {
  app.post("/api/advertskills", AdvertSkillsController.create);
  app.get("/api/advertskills/:id", AdvertSkillsController.findOne);
  app.get("/api/advertskills", AdvertSkillsController.findAll);
  app.put("/api/advertskills/:id", AdvertSkillsController.update);
  app.delete("/api/advertskills/:id", AdvertSkillsController.delete);
};