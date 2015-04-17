var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	
	/*
	res.send({
		user: ['Will',"laura"]
	});
	*/
  	res.render('index', { title: 'Veere' });
  	console.log(req);
  	res.send("ok");
});

module.exports = router;
