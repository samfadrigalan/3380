var express = require('express');
var fs = require('fs');
var url = require('url');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log('in login.js');
	var queryObj = url.parse(req.url,true).query;
	/*
	try{
		fs.readdir("C:\\Users\\Howard\\Google Drive\\Scripts\\myFirstNodeJsApp\\myapp\\db\\loginInfo.json",function(err,files){
			if(err)
				throw(err);
			else
				console.log(files);
		});
	}catch(err){
		console.log(err);
		console.log('catched some error');
	}
	*/
	try{
		fs.readFile("C:\\Users\\Howard\\Google Drive\\Scripts\\myFirstNodeJsApp\\myapp\\db\\loginInfo.json",'utf8',function(err,data){
			if(err){
				console.log('reading file error');
				res.writeHead(500,{"content-type":"text/plain"});
				res.end();
			}else{
				var users = JSON.parse(data).Users;
				var found = false;
				for(var i=0;i<users.length;i++){
					//console.log(users[i]);
					var user = users[i];
					if((user.ID == queryObj.name)&&(user.pw == queryObj.pw)){
						var resObj = {"success": false};
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
