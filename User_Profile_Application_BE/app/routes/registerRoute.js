var express = require('express');
var router = express.Router();

var register = require('../controllers/User');
router.post('/addUser', register.addUser);

module.exports = router;