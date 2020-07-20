const express = require("express");
const app = express();

function handleListening() {
  console.log("starting at http://www.localhost:4000");
}

function handleHome(req, res) {
  console.log(req);
  res.send("Hello from home");
}

function handleProfile(req, res) {
  res.send("Its next route");
}

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(4000, handleListening);
