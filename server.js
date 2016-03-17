// server.js

// modules ===============================================================
var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

// configuration =========================================================

// set mongoDB
//var db = require('./config/db');

// set port
var port = 80;

//connect to database
mongoose.connect('mongodb://glados:3318adminsen@ds013559.mlab.com:13559/kollektiv_portal');

// parse application/json
app.use(bodyParser.json());

app.use(morgan('dev'));

// parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// override with the X-HTTP-Method-Override header in the request.
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location
app.use(express.static(__dirname+'/public'));


// add routes ============================================================

require('./app/routes')(app);

// start app =============================================================
app.listen(port);
console.log('App is listening on port '+port);

module.exports = app;

