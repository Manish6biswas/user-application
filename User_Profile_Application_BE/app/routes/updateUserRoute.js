var express = require('express');
var router = express.Router();

var update = require('../controllers/User');

router.post('/updateUser', update.updateUser);

module.exports = router;