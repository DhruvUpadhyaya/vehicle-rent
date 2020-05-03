const express = require("express");
const router = express.Router();
const User = require("../models/User");

//get all user list
router.get("/", async (req, res) => {
  try {
    const allUser = await User.find();
    res.json(allUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// create user
router.post("/create", async (req, res) => {
  request = req.body;
  const user = new User({
    name: request.name,
    phoneNumber: request.phoneNumber,
    returnDate: request.returnDate,
    // !!!Remove issued date only for testing pupose
    //issuedDate: request.issuedDate,
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

//update user
router.patch("/update", async (req, res) => {
  request = req.body;
  try {
    const userID = request.userID;

    const updatedUser = await User.updateOne(
      { _id: userID },
      {
        $set: {
          name: request.name,
          phoneNumber: request.phoneNumber,
          returnDate: request.returnDate,
        },
      }
    );

    res.json({ updated: updatedUser });
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
