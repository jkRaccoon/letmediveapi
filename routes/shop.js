var express = require('express');
var router = express.Router();
require('dotenv').config();
/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log(process.env);
  res.send('respond with a resource');
});

module.exports = router;
