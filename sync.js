//console.log("Node starting...");
// var fs = require('fs');
// console.log(fs);
// console.log(fs.readFileSync('./file1.txt'));
//var nodeStartingFunctionFileCode = require("./nodeStartingFunction");
//console.log(nodeStartingFunctionFileCode);

//nodeStartingFunctionFileCode.nodeStartingFunction();


//Blocking
/*var nodeStartingFunctionFileCode = require("./nodeStartingFunction");
nodeStartingFunctionFileCode.nodeStartingFunction();
var fs = require('fs');
// console.log(fs);
console.log(fs.readFileSync('./file1.txt').toString()); // FREEZE

//Non-Blocking
var nodeStartingFunctionFileCode = require("./nodeStartingFunction");
nodeStartingFunctionFileCode.nodeStartingFunction();
var fs = require('fs');
fs.readFile('./file1.txt', function(err, data) {
    console.log(data);  // buffer object
    console.log(data.toString());
});*/

var nodeStartingFunctionFileCode = require("./nodeStartingFunction");
nodeStartingFunctionFileCode.nodeStartingFunction();
var fs = require('fs');
var buffer = '';
fs.readFile('./file1.txt', function(err, data) {
    buffer = data.toString();  // buffer object
    console.log(buffer);
});
