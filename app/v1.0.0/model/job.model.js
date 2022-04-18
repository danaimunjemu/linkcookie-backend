const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Job = new Schema({
  advertId: { type: String },
  title:{type:String},
  summary: { type: String },
  type: { type: String },
  period: { type: String },
  salary: { type: String },
  location: { type: String }
});
module.exports = mongoose.model("Job", Job);
