const express = require("express");

const articleRouter = require("./routes/articles.js");

const app = express();

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(5000, () => {
  console.log("Server running on PORT: 5000");
});
