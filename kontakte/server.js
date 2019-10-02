const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

// Initialisierung der EJS Template Engine
app.engine('.ejs', require('ejs').__express);
app.set('view engine', 'ejs');

app.listen(3000, function(){
    console.log("Listening on 3000");
});

app.get("/kontakteingeben", function(req, res){
    res.sendFile(__dirname + "/kontakteingeben.html");
});

app.post("/kontakt", function(req, res){
    /* req.body ist ein Objekt, z.B.
    {
        vorname: "Andreas",
        nachname: "Plaß"
    }
    */
    res.render("kontaktanzeigen", req.body);
});
