const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');

const clubRoute = require('./api/clubs/club.routes');
const commentRoute = require('./api/comments/comment.routes');

app.use(cors())
app.use(bodyParser.json());
app.use('/clubs', clubRoute);
app.use('/comments', commentRoute);


module.exports = app;