const Backbone = require('backbone'),
	reactRenderer = require("config/routes/reactRenderer"),
	routes = require("config/routes/routes");

var Router = Backbone.Router.extend({
	renderPage: function (component) {
		reactRenderer(component);
	}
});

Router.prototype.routes = routes(Router.prototype.renderPage);

var router = new Router();
Backbone.history.start();

module.exports = router;