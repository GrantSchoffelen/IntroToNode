//console.log(process.argv);

/*var nodeStartingFunctionFileCode = require("./nodeStartingFunction");
nodeStartingFunctionFileCode.nodeStartingFunction();
var fs = require('fs');
for(var i = 3; i< process.argv.length; i++){
    fs.readFile(process.argv[i], function(err, data){
    console.log(data.toString());  // buffer object
 
  });
}*/

/*console.log("Node starting...");
var buffer = '';
var fs = require('fs');
fs.readFile('./file1.txt', function(err, data) {
     buffer = data.toString();  // buffer object
     console.log(buffer);
});
 
 
fs.watchFile('./file1.txt', {interval:10}, function(prev, curr) {
  console.log('updated file');
  // display an update was made, then console.log the new updated file!
  fs.readFile('./file1.txt', function(err, data) {
     buffer = data.toString();  // buffer object
     console.log(buffer);
});
});*/

var express = require('express');
var fs = require('fs');
var logger = require('morgan');
var async = require('async');
// var htmlTemplate = fs.readFileSync('views/filelist.ejs', 'utf8');
var ejs = require('ejs'); 

 
// take a list of files from the command line
// now we can run our app like:
// node app.js file1.js file2.js file3.js
// and it will watch all three files
var files = Array.prototype.slice.call(process.argv, 2);
console.log(files);
 
// create the express app
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

fs.watchFile(io.sockets.emit("filechanged", { filename: filename, filetext: data.toString() }));


server.listen(1234);
// after initializing app
app.set('view engine', 'ejs');
 
// all environments
app.use(logger('dev'));
 
// listen on port 1234
app.listen(1234);
 
// when someone comes to http://localhost:1234/, run the callback
// function listed here and send down the data
// we call this the: '/' route (or the Root route).
// app.get("/", function(request, response){
//     var fileContents = "";
//     var readFileCount = 0;
//     files.forEach(function(fileName){
//         fs.readFile(fileName, function(err, fileData){
//             fileContents += '<pre>'+ fileData.toString() +'</pre>';
//                 readFileCount++;
//                  if(readFileCount >= files.length){
//  					console.log(readFileCount);
//  					console.log(files.length);
//                   response.send(fileContents);
//                 }
//         });
//     });
// });



app.get("/", function(request, response) {
	var fileObj;
//   var mapFilesToFileObjects = function(fileName, function())
//   {fs.readFile(fileName, function(err, fileName){
//             fileContents += '<pre>'+ fileName.toString() +'</pre>';
//    })
//     // insert the file reading code and call the callback correctly here
//     doneCallback(null, passsomethinghere); 
//   };

	var mapFilesToFileObjects = function(fileName, doneMappingOneFile) {
		fs.readFile(fileName, function(err, fileData) {

			fileObj = { 	id: fileName.replace(/[^0-9]/ig, ""),
							fileData: fileData.toString(),
							fileName: fileName
							};
							
			doneMappingOneFile(null, fileObj);
		});
	};
 
  async.mapSeries(files, mapFilesToFileObjects, function(err, results) {
    
    response.render('filelist', { files: results});
  });
});






