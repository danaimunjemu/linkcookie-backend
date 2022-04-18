const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserBilling = new Schema({
  userId: {type:String},
  streetAddress: { type: String },
  townCity: { type: String },
  country: { type: String },
});
module.exports = mongoose.model("UserBilling", UserBilling);
