const express = require("express");
const mongoose = require("mongoose");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use(errorHandler);

// Connect with database
mongoose.connect("mongodb://127.0.0.1:27017/brad-MERN", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection Error:(")
);
mongoose.connection.once("open", function () {
  console.log("--------------------------------");
  console.log("Database Connect successfully...");
  console.log("--------------------------------");
});

app.listen(process.env.PORT, () => {
  console.log("--------------------------------");
  console.log(`Server Listening in PORT ${process.env.PORT}`);
});
