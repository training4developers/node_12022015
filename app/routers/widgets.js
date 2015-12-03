const
	express = require("express");

var
	widgetRouter = express.Router(),
	widgets = [
		{ id: 1, name: "Widget 1", color: "red", size: "small" },
		{ id: 2, name: "Widget 2", color: "blue", size: "medium" },
		{ id: 3, name: "Widget 3", color: "green", size: "large" },
	],
	nextWidgetId = widgets.length;

widgetRouter.route("/widgets")
	.get(function(req, res) {
		res.json(widgets);
	})
	.post(function(req, res) {
		req.body.id = ++nextWidgetId;
		widgets.push(req.body);
		res.json({
			widgetId: req.body.id
		});
	});

widgetRouter.route("/widgets/:widgetId")
	.get(function(req, res) {
		res.json(widgets.filter(function(widget) {
			return widget.id === parseInt(req.params.widgetId, 10);
		})[0]);
	})
	.put(function(req, res) {

		var widgetToUpdate = widgets.filter(function(widget) {
			return widget.id === parseInt(req.params.widgetId, 10);
		})[0];

		widgetToUpdate.name = req.body.name;
		widgetToUpdate.color = req.body.color;
		widgetToUpdate.size = req.body.size;

		res.end();
	})
	.delete(function(req, res) {

		var widgetToDelete = widgets.filter(function(widget) {
			return widget.id === parseInt(req.params.widgetId, 10);
		})[0];

		var widgetToDeleteIndex = widgets.indexOf(widgetToDelete);

		widgets.splice(widgetToDeleteIndex, 1);
		res.end();

	});

module.exports = widgetRouter;
