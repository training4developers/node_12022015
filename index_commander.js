
var
	mathTools = require("./math");
	program = require("commander-plus");

program
	.version("0.0.1")
	.option("-X, --xvalue [num]", "Enter a value for x")
	.option("-Y, --yvalue [num]", "Enter a value for y")
	.parse(process.argv);

console.log("x: " + program.xvalue);
console.log("y: " + program.yvalue);

var
	x = parseInt(program.xvalue, 10),
	y = parseInt(program.yvalue, 10);

console.log(mathTools.square(x));
console.log(mathTools.add(x,y));
console.log(mathTools.mul(x,y));
