var Features = Backbone.Collection.extend({
	model: Feature,
	url: '/features',

	getFeatures: function() {
		return Backbone.sync("fetch", this, {async: false}).responseJSON;
	}
});

module.exports = new Features();
