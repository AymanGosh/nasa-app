const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const galaxySchema = new Schema({
  title: String,
  explanation: String,
  media_type: String,
  url: String,
});

const Galaxy = mongoose.model("Galaxy", galaxySchema);
module.exports = Galaxy;
