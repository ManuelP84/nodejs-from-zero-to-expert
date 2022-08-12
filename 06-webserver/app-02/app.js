const express = require("express");
const app = express();
const port = 3000;

// Serve static content
app.use(express.static("public")); //It serves the index.html

// Ennpoints
// app.get('/',  (req, res) => {    // The middleware cancel this endpoint
//   res.send('Home')
// })

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`App listening on port http:${port}`);
});
