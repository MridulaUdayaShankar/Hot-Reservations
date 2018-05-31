var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

pp.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tables = [
    {
      routeName: "John",
      name: "john",
      Phone: "4157223333",
      email: "john@gmail.com",
      UniqueId: "john1234"
    },
    {
        routeName: "junior",
        name: "Junior",
        Phone: "4155551111",
        email: "junior@gmail.com",
        UniqueId: "junior567"
    },
    ];

  var waitList = [
    {
      routeName: "mridula",
      name: "Mridula",
      Phone: "4158882222",
      email: "mridula@gmail.com",
      UniqueId: "mridula3211234"
    },
    {
        routeName: "yumna",
        name: "yumna",
        Phone: "4159991234",
        email: "yumna@gmail.com",
        UniqueId: "yumna987"
    },
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
        
        var newTable = req.body;
      
        newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
      
        console.log(newTable);
      
        tables.push(newTable);
      
        res.json(newTable);
      });




      app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
      });