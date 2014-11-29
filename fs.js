/**
 * New node file
 */
var fs = require("fs");

fs.exists('test1.txt', function(exists){
	console.log('fs.exists : ', exists);
})

var exists = fs.existsSync('test.txt');
console.log('fs.existsSync : ', exists);


fs.writeFile('message.txt', 'Hello Node 윤태경', 'utf-8', function(err){
	if(err){
		throw err;
	}
	console.log('It\'s saved!');
});


fs.writeFile('message1.txt', 'Hello Node1 윤태경', 'utf-8');