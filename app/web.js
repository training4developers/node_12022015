module.exports = function(config) {

	const
		http = require("http"),
		express = require("express"),
		bodyParser = require("body-parser");

	var
		app = express(),
		httpServer = http.createServer(app);

	app.use(express.static(config.webServer.rootFolder));

	return {
		start: function() {
			httpServer.listen(config.webServer.port, function() {
				console.log("listening on port: " + config.webServer.port);
			});
		}
	};

};
