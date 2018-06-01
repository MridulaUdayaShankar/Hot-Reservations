var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tables = [
  {
    routeName: "John",
    name: "john",
    phone: "4157223333",
    email: "john@gmail.com",
    UniqueId: "john1234"
  },
  {
    routeName: "junior",
    name: "Junior",
    phone: "4155551111",
    email: "junior@gmail.com",
    UniqueId: "junior567"
  }
];

var waitListTable = [
  {
    routeName: "mridula",
    name: "Mridula",
    phone: "4158882222",
    email: "mridula@gmail.com",
    UniqueId: "mridula3211234"
  },
  {
    routeName: "yumna",
    name: "yumna",
    phone: "4159991234",
    email: "yumna@gmail.com",
    UniqueId: "yumna987"
  }
];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

app.get("/api/waitList", function(req, res) {
  return res.json(tables);
});

app.post("/api/tables", function(req, res) {
  var currentRes = req.body;

  console.log(currentRes);
//to check if the table length is less than 5 or not
  if (tables.length < 5) {
      //if less than 5 push to current reservations
    tables.push(currentRes);
    console.log("tables",tables);
  } else {
      //else push to waiting list 
    waitListTable.push(currentRes);
    console.log("wait list",waitListTable);
  }
  res.json(currentRes);
});

app.post("/api/waitList", function(req, res) {
  var waitingList = req.body;

  console.log(waitingList);

  waitListTable.push(waitingList);

  res.json(waitingList);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
