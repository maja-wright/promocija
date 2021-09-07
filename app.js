const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/najam-opreme", function(req, res){
  res.sendFile(__dirname + "/pages/najam.html");
});

app.get("/kontakt", function(req, res){
  res.sendFile(__dirname + "/pages/contact.html");
});


app.get("/pozornice", function(req, res){
  res.sendFile(__dirname + "/pages/pozornice.html");
});

app.get("/kucice", function(req, res){
  res.sendFile(__dirname + "/pages/kucice.html");
});

app.get("/kupole", function(req, res){
  res.sendFile(__dirname + "/pages/kupole.html");
});

app.get("/ograde", function(req, res){
  res.sendFile(__dirname + "/pages/ograde.html");
});

app.get("/oprema", function(req, res){
  res.sendFile(__dirname + "/pages/oprema.html");
});

app.get("/pagode", function(req, res){
  res.sendFile(__dirname + "/pages/pagode.html");
});

app.get("/sankovi", function(req, res){
  res.sendFile(__dirname + "/pages/sankovi.html");
});

app.get("/satori", function(req, res){
  res.sendFile(__dirname + "/pages/satori.html");
});

app.get("/standovi", function(req, res){
  res.sendFile(__dirname + "/pages/standovi.html");
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});