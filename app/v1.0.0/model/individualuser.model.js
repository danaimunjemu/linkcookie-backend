const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const IndividualUser = new Schema({
  userId: {type:String},
  firstName: { type: String },
  lastName: { type: String },
  dob: { type: Date },
});
module.exports = mongoose.model("IndividualUser", IndividualUser);
