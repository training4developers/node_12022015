"use strict";

var
	app = require("./app/app"),
	program = require("commander-plus");

program
	.version("0.0.1")
	.option("-C, --config [fileName]", "Config file for web app")
	.parse(process.argv);

var
	configFile = program.config || "./config.json";

app({
	configFile: configFile
});
