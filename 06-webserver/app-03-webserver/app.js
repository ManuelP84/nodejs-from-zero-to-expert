const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

const person = {
  name: "manuel",
  title: "node",
};

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {});

// Static
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", person);
});

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html');
// })

app.get("/elements", (req, res) => {
  res.render("elements", person);
});

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html');
// })

app.get("/generic", (req, res) => {
  res.render("generic", person);
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
