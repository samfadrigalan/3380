var express = require('express');
//var fs = require('fs');
var router = express.Router();
var url = require('url');

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log('in login.js')
	var queryObj = url.parse(req.url,true).query;
	//fs.readFile('/')
	//console.log(queryObj);
	//console.log(urlpart.query);
	/*
	fs.readFile('/script/controller.js',function(err,data){
		if(err){
			console.log('error when reading file');
			res.writeHead(500,{'content-type':'text/plain'});
			res.write(err + '\n');
			res.end();
		}else{
			res.writeHead(200,{'content-type':'application/javascripts'})
			res.write(data);
			res.end();
		}
	});
*/
});

module.exports = router;
