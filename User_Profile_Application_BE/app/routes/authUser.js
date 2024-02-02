var express = require('express');
var router = express.Router();

var Auth = require('../controllers/authUser');

router.post('/auth', Auth.authUser);

module.exports = router;