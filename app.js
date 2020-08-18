const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const clubRoute = require('./api/clubs/club.routes');

app.use(bodyParser.json())
app.use('/clubs', clubRoute)


module.exports = app;