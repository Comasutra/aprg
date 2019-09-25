// lädt und initialisiert das Modul "Express"
const express = require("express");
const app = express();

// startet den Webserver
app.listen(3000, function(){
    console.log("Listening on Port 3000");
});

// Request "hello"

// Callback Funktion
function helloRequestCallback(req, res){
    res.send('Hello World');
}
app.get("/hello", helloRequestCallback);

// Beispiel mit anonymer Funktion
app.get("/moin", function(req, res){
    res.send("Moin Moin");
});

app.get("/helloworld", function(req, res){
    res.sendFile(__dirname + "/helloworld.html")
});

app.get("/form", function(req, res){
    res.sendFile(__dirname + "/form.html");
});