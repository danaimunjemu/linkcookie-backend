const UserExperienceController = require("./../controller/userexperience.controller");
module.exports = (app) => {
  app.post("/api/userexperience", UserExperienceController.create);
  app.get("/api/userexperience/:id", UserExperienceController.findOne);
  app.get("/api/userexperience", UserExperienceController.findAll);
  app.put("/api/userexperience/:id", UserExperienceController.update);
  app.delete("/api/userexperience/:id", UserExperienceController.delete);
};