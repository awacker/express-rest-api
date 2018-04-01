const express     = require("express");           // call express
const bodyParser  = require("body-parser");
const app         = express();                    // define our app using express
const config      = require('config');

const User        = require('./routes/user');
const Customer    = require('./routes/customer');
const Country     = require('./routes/country');

// ============================================================================ DB SERVER CONNECTION
const mongoose = require('mongoose');
mongoose.connect(config.connectionString);

// =================================================================================== SERVER CONFIG
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ================================================================================== ROUTES SETTING

app.use('/api/users', User);
app.use('/api/customers', Customer);
app.use('/api/countries', Country);
app.use('/api/resources', require('http-requests-aggregator'));            // map link to aggregator

app.use((req, res, next) => res.status(404).send('Sorry, page not found!'));

// ==================================================================================== SERVER START
var server = app.listen(8080, function () {
    console.log("App running on port.", server.address().port);
});

module.exports = app;
