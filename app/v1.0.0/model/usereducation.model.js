const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserEducation = new Schema({
  userId: {type:String},
  country: { type: String },
  university: { type: String },
  degree: { type: String },
  startYear: { type: String },
  endYear: { type: String }
});
module.exports = mongoose.model("UserEducation", UserEducation);
