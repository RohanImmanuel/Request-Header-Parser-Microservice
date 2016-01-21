var path = require("path");
var express = require("express");
var app = express();

// Homepage
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

// Favicon error fix
app.get('/favicon.ico', function(res, res) {
    res.end();
});

// API
app.get('/whoami', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.json({
        ipaddress: req.headers['x-forwarded-for'],
        language: req.headers['accept-language'].split(',')[0],
        software: req.headers['user-agent'].split('(')[1].split(')')[0]
    });
});

// Start Server
app.listen(8080);