const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  issuedDate: {
    type: Date,
    default: Date.now,
    // required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
