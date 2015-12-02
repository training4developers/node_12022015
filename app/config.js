module.exports = function(config) {
	"use strict";

	const
		fs = require("fs");

	return {
		loadConfig: function() {
			return new Promise(function(resolve, reject) {
				fs.readFile(config.configFile, "utf-8", function(err, data) {

					if (err) {
						reject(err);
						return;
					}

					resolve(JSON.parse(data));
				});
			});
		}
	}



};
