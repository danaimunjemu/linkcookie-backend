const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = new Schema({
  email: { type: String },
  username: { type: String },
  password: { type: String },
  userType: { type: String },
  professionalHeadline: { type: String },
  summary: { type: String },
  hourlyRate: { type: String },
  dateCreated: { type: Date },
});
module.exports = mongoose.model("User", User);

