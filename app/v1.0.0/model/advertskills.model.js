const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AdvertSkills = new Schema({
  advertId: { type: String },
  skillId: { type: String }
});
module.exports = mongoose.model("AdvertSkills", AdvertSkills);
