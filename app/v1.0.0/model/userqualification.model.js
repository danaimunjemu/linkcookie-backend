const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserQualification = new Schema({
  userId: {type:String},
  certificate: { type: String },
  summary: { type: String },
  startYear: { type: String },
  endYear: { type: String },
});
module.exports = mongoose.model("UserQualification", UserQualification);
