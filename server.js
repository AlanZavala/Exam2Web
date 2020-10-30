const { ok } = require("assert");
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res){
    res.json("You are in the home page");
});

app.post("/post", function(req, res){
    var user = req.body.user;
    console.log(user);
    console.log(req.body);
    res.json("welcome: " + user);
});

app.delete("/delete", function(req, res){
    var response = {
        delete: true
    };

    res.json(response);
});

app.put("/put/:id", function(req, res){
    var taskId = req.params.id;
    res.json("Task " + taskId + " has been updated");
});
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });