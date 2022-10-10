const mongoose = require("mongoose");

//schema
const stationSchema = new mongoose.Schema({
  stationID: { type: String, required: true },
  name: String,
  ltg: Number,
  lng: Number,
  companyID: String
});

//model
const Station = mongoose.model("station", stationSchema);

module.exports = Station;
