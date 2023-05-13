const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles.js");
const Article = require("./models/article.js");
const methodOverride = require("method-override");
const app = express();

// connect database
mongoose
  .connect(
    "mongodb+srv://vireakrothpun:lwDPSF0Xmm4HNOvK@cluster0.il41wtj.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });
  res.render("articles/index", { articles: articles });
});

app.use("/articles", articleRouter);

app.listen(5000, () => {
  console.log("Server running on PORT: 5000");
});
