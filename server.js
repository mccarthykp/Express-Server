//jshint esversion:6
const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("Home");
});

app.get("/About", function(req, res){
  res.send("About");
});

app.get("/Contact", function(req, res){
  res.send("Contact");
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
