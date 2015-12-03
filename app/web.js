function web(config) {

	const
		http = require("http"),
		express = require("express"),
		bodyParser = require("body-parser"),
		widgetRouter = require("./routers/widgets");

	var
		app = express(),
		httpServer = http.createServer(app);

	app.use("/api", bodyParser.json());
	app.use("/api", widgetRouter);


	app.use(express.static(config.webServer.rootFolder));

	return {
		start: function() {
			httpServer.listen(config.webServer.port, function() {
				console.log("listening on port: " + config.webServer.port);
			});
		}
	};

};

module.exports = web;
