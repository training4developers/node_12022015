module.exports = function(config) {
	"use strict";

	const
		appConfig = require("./config")(config),
		webServer = require("./web");

	appConfig.loadConfig().then(function(conf) {

		var ws = webServer(conf);
		ws.start();

	});

};
