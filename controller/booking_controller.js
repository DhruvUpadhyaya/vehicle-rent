const express = require("express");
const router = express.Router();
const Booking = require("../models/BookingStatus");
const User = require("../models/User");

//get all booking list
router.get("/", async (req, res) => {
  try {
    const allBookings = await Booking.find();
    res.json(allBookings);
  } catch (err) {
    res.json({ message: err });
  }
});

//book vehicle
router.post("/book", async (req, res) => {
  request = req.body;
  const booking = new Booking({
    userID: request.userID,
    vehicleID: request.vehicleID,
  });
  const vehicleId = request.vehicleID;
  const userId = request.userID;
  // Book car if it is availabe on date mentioned by user
  //find car which user wnated
  // find if it already booked on mentioned date if not then assign car to user
  try {
    const bookedVehicel = await Booking.find({ vehicleID: vehicleId });

    const currentUser = await User.findById(userId);

    if (bookedVehicel == "") {
      const savedBooking = await booking.save();
      res.json({ Booked: savedBooking });
      res.end();
    }
    for (let i = 0; i < bookedVehicel.length || i == 0; i++) {
      const bookedUser = await User.findById(bookedVehicel[i].userID);
      if (bookedUser.returnDate <= currentUser.issuedDate) {
        const savedBooking = await booking.save();

        res.json({ Booked: savedBooking });
        res.end();
      }
    }
    res.json({ message: "Please choose other available car" });
    res.end();
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
