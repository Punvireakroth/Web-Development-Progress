const express = require("express");

const articleRouter = require("./routes/articles.js");

const app = express();

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Go Go real madrid",
      createdAt: Date.now(),
      description: "I am a Real Madrid fan",
    },
  ];
  res.render("index", { articles: articles });
});

app.listen(5000, () => {
  console.log("Server running on PORT: 5000");
});
