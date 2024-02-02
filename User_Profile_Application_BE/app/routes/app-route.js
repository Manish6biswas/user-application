var express = require('express');
var app = express();
var registerRoute = require('./registerRoute');
var updateUSerRoute = require('./updateUserRoute');
var loginRoute = require('./authUser');
var getUserRoute = require('./getUserRoute');

app.use('/register', registerRoute);
app.use('/update', updateUSerRoute);
app.use('/login', loginRoute);
app.use('/user', getUserRoute);

module.exports = app;