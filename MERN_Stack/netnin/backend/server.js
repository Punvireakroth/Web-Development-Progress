require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// Create express app
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  console.log("-----------------------------");
  next();
});
app.use(express.json()); // the purpose is to able to use the req.body

// Routes
app.use("/api/workouts/", workoutRoutes);

// Connect with database
mongoose
  .connect(process.env.DATA_BASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server run on PORT 3000....");
      console.log("-----------------------------");
    });
    console.log("-----------------------------");
    console.log("MongoDB DATABASE connected!");
    console.log("-----------------------------");
  })
  .catch((err) => console.log(`Error connecting to MongoDB: ${err}`));
