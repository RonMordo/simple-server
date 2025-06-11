const express = require("express");
const path = require("path");
const chalk = require("chalk");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// Initialize server
app.listen(PORT, () => {
  console.log(chalk.green(`Listening on PORT: ${PORT}`));
});
