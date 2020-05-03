const mongoose = require("mongoose");

const VehicleSchema = mongoose.Schema({
  vehicleNumber: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },

  seatingCapacity: {
    type: Number,
    required: true,
  },

  rentPerDay: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Vehicle", VehicleSchema);
