var http = require("http");
var fs = require("fs");
http.createServer(function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
	fs.readFile("1.json","utf-8",function(err,data){
		if(err){
			throw err;
		}else{
			res.end(data);
		}
	})
}).listen(6363,function(){
	console.log("ok");
})
