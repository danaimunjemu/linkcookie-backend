const AdvertController = require("./../controller/advert.controller");
// const jwtUtil = require('./../helper/jwt.helper');
module.exports = (app) => {
  app.post("/api/advert", AdvertController.create);
  app.get("/api/advert/:id", AdvertController.findOne);
  app.get("/api/advert", AdvertController.findAll);
  app.put("/api/advert/:id", AdvertController.update);
  app.delete("/api/advert/:id", AdvertController.delete);
};


// module.exports = (app) => {
//   app.post("/api/advert",[jwtUtil.verifyToken], AdvertController.create);
//   app.get("/api/advert/:id",[jwtUtil.verifyToken], AdvertController.findOne);
//   app.get("/api/advert",[jwtUtil.verifyToken], AdvertController.findAll);
//   app.put("/api/advert/:id",[jwtUtil.verifyToken], AdvertController.update);
//   app.delete("/api/advert/:id",[jwtUtil.verifyToken], AdvertController.delete);
// };
