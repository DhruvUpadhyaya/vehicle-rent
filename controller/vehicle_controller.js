const express = require("express");
const router = express.Router();
const Vehicle = require("../models/Vehicle");
const BookingStatus = require("../models/BookingStatus");

// list of created vehicles
router.get("/", async (req, res) => {
  try {
    const vehicle = await Vehicle.find();
    console.log(vehicle);
    res.json(vehicle);
  } catch (err) {
    res.json({ message: err });
  }
});

// create vehicle
router.post("/create", async (req, res) => {
  request = req.body;
  const vehicle = new Vehicle({
    vehicleNumber: request.vehicleNumber,
    model: request.model,
    seatingCapacity: request.seatingCapacity,
    rentPerDay: request.rentPerDay,
  });

  try {
    const savedVehicle = await vehicle.save();
    res.json(savedVehicle);
  } catch (err) {
    res.json({ message: err });
  }
});
router.get("/specific", (req, res) => {
  res.send("specific vehicle");
});

// delete vehicle
router.delete("/delete", async (req, res) => {
  // get the vehcle by id
  const vehicleId = req.body.vehicleID;

  // check if vehicle is booked or not
  try {
    const bookedVehicel = await BookingStatus.find({ vehicleID: vehicleId });

    if (bookedVehicel == "") {
      const deleted = await Vehicle.findByIdAndDelete(vehicleId);
      res.json({ message: deleted });
    } else {
      res.json({ message: "vehicle is booked and cannot be deleted" });
    }
  } catch (err) {
    res.json({ message: err });
  }
});

//Update vehicle
router.patch("/update", async (req, res) => {
  request = req.body;
  try {
    const vehicleID = request.vehicleID;
    const updatedVehicle = await Vehicle.updateOne(
      { _id: vehicleID },
      {
        $set: {
          vehicleNumber: request.vehicleNumber,
          model: request.model,
          seatingCapacity: request.seatingCapacity,
          rentPerDay: request.rentPerDay,
        },
      }
    );

    res.json({ updated: updatedVehicle });
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
