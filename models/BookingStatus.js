const mongoose = require("mongoose");

const BookingStatusSchema = mongoose.Schema({
  userID: {
    type: String,
    // ref: "User",
    required: true,
  },
  vehicleID: {
    type: String,
    //ref: "Vehicle",
    required: true,
  },
});

module.exports = mongoose.model("BookingStatus", BookingStatusSchema);
