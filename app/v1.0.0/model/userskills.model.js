const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSkills = new Schema({
  userId: { type: String },
  skillId: { type: String }
});
module.exports = mongoose.model("UserSkills", UserSkills);
