const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserExperience = new Schema({
  userId: {type:String},
  title: { type: String },
  summary: { type: String },
  company: { type: String },
  startYear: { type: String },
  endYear: { type: String },
  startMonth: { type: String },
  endMonth: { type: String },
  current: { type: Boolean },
});
module.exports = mongoose.model("UserExperience", UserExperience);
