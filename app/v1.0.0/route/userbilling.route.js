const UserBillingController = require("./../controller/userbilling.controller");
module.exports = (app) => {
  app.post("/api/userbilling", UserBillingController.create);
  app.get("/api/userbilling/:id", UserBillingController.findOne);
  app.get("/api/userbilling", UserBillingController.findAll);
  app.put("/api/userbilling/:id", UserBillingController.update);
  app.delete("/api/userbilling/:id", UserBillingController.delete);
};