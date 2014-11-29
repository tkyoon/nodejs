/**
 * New node file
 */
var os = require("os");
var util = require("util");

console.log("os.type=" + os.type());
console.log("hostname=" + os.hostname());
console.log("tempdir=" + os.tmpdir());
util.log(os.networkInterfaces());