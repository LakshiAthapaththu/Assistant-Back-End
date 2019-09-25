//server implementation
var express = require('express')
var app = express()                        // create our app w/ express
const path = require('path');
var port     =process.env.PORT ||1443;                // set the port
var bodyParser = require('body-parser'); 
var fs = require('fs-extra');
var html = require('html');
var https = require('https');
require('dotenv').config();
 
var options = {
  ca: fs.readFileSync(path.join(__dirname, process.env.CA_PATH)),
  key: fs.readFileSync(path.join(__dirname, process.env.KEY)),
  cert: fs.readFileSync(path.join(__dirname, process.env.CERT_PATH)),
  passphrase: process.env.PASSPHRASE

};
//db
// var mongoose = require('mongoose');
// var config= require("./Data/confi g.js")  //
// mongoose.connect(config.connectionString); //connecting to the db
//end of db

// var fs = require('fs-extra');
// var mega = require('mega');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
const api=require('./routes.js');
app.use('/api',api);

// Catch all other routes and return the index file
app.use(express.static(path.join(__dirname, '../frontend/VoiceCollector/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/VoiceCollector/build/index.html'));
     // res.send('hello world');
});
https.createServer(options, app).listen(port, function(){
  console.log("server  started at port "+port);
});
// app.listen(port);
console.log("App listening on port " + port);
module.exports = app;


// 
// 
