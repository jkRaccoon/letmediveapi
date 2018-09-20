const express = require('express');
const router = require('express-promise-router')();
const db = require('../lib/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
	return db.query('select * from shoplist')
		.then((result) => {
			res.send(result);
		});
});

module.exports = router;
