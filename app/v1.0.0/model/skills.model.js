const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Skills = new Schema({
  skillName: { type: String },
});
module.exports = mongoose.model("Skills", Skills);
