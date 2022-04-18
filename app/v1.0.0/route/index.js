module.exports = (app) => {
  require("./user.route")(app);
  require("./advert.route")(app);
  require("./individualuser.route")(app);
  require("./corporateuser.route")(app);
  require("./userbilling.route")(app);
  require("./userexperience.route")(app);
  require("./usereducation.route")(app);
  require("./userqualification.route")(app);
  require("./skills.route")(app);
  require("./userskills.route")(app);
  require("./advertskills.route")(app);
  require("./project.route")(app);
  require("./job.route")(app);
};
