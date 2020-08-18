const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const clubRoute = require('./api/clubs/club.routes');
const commentRoute = require('./api/comments/comment.routes');

app.use(bodyParser.json());
app.use('/clubs', clubRoute);
app.use('/comments', commentRoute);


module.exports = app;