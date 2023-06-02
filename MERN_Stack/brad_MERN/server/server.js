const express = require("express");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server Listening in PORT ${process.env.PORT}`);
});
