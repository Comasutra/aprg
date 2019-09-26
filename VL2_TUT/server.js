// Initialisierung des Webservers
const express = require('express');
const app = express()

// Webserver starten
app.listen(3000, function() {
    console.log('listening on 3000')
});

app.get('/hello', function(req, res) {
    res.send('hello');
});

app.use(express.static(__dirname + '/public'));