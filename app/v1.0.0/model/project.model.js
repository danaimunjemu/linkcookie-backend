const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Project = new Schema({
  advertId: { type: String },
  name:{type:String},
  summary: { type: String },
  budget: { type: String }
});
module.exports = mongoose.model("Project", Project);
