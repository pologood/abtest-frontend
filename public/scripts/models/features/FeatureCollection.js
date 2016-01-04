var Feature = require("./FeatureModel"),
	app = require("app");

var Features = Backbone.Collection.extend({
	model: Feature,
	url: app.backendUrl + '/features',

	getFeatures: function() {
		return Backbone.sync("fetch", this, {async: false}).responseJSON;
	}
});

module.exports = new Features();
