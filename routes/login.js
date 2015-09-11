var express = require('express');
var fs = require('fs');
var url = require('url');
var router = express.Router();


/* GET users listing. */
router.post('/', function(req, res, next) {
	console.log('in login.js');
	var params = {
		name: req.body['name'],
		pw: req.body['pw']
	};
	console.log(params)
	try{
		fs.readFile("./db/loginInfo.json",'utf8',function(err,data){
			if(err){
				console.log('reading file error: ' + err.stack);
				res.writeHead(500,{"content-type":"text/plain"});
				res.end();
			}else{
				var users = JSON.parse(data).Users;
				var found = false;
				for(var i=0;i<users.length;i++){
					//console.log(users[i]);
					var user = users[i];
					if((user.ID == params['name'])&&(user.pw == params['pw'])){
						var resObj = {"success": true};
						res.write(JSON.stringify(resObj));
						res.end();
						found = true;
						break;
					}
				}
				if(!found){
					var resObj = {"success": false};
					res.write(JSON.stringify(resObj));
					res.end();
				}
				//console.log(users);
			}
		});
	}catch(err){
		console.log(err);
		console.log('catched some error');
	}
});

module.exports = router;
