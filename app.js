const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

//Import routes

//user route
const userRoutes = require("./controller/user_controller");
app.use("/user", userRoutes);

//vehicle route
const vehicleRoute = require("./controller/vehicle_controller");
app.use("/vehicle", vehicleRoute);

//booking route
const bookingRoute = require("./controller/booking_controller");
app.use("/booking", bookingRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("WE ARE ON HOME");
});

//connect to db
mongoose.connect(
  "mongodb+srv://dhruv:dhruv@cluster0-xtgqw.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db");
  }
);

//How we start the server
app.listen(process.env.PORT || 3000);
