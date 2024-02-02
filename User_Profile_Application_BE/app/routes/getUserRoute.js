var express = require('express');
var router = express.Router();

var user = require('../controllers/User');

router.post('/getUser', user.getUser);

module.exports = router;