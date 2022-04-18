const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CorporateUser = new Schema({
  userId: {type:String},
  companyName: { type: String },
  companyType: { type: String },
  dateCreated: { type: Date },
});
module.exports = mongoose.model("CorporateUser", CorporateUser);
