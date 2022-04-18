const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Advert = new Schema({
  userId: { type: String },
  type:{type:String, required:true},
  paid: { type: Boolean },
  dateCreated: { type: Date },
  dateDue: { type: Date }
});
module.exports = mongoose.model("Advert", Advert);
