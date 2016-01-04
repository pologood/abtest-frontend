const app = require("app");

var Feature = Backbone.Model.extend({
	urlRoot: app.backendUrl + '/features',
	idAttribute: '_id',

	enabling : function(status) {
		this.save({enabled: status});
	}

});

var Features = Backbone.Collection.extend({
	model: Feature,
	url: '/features',

	getFeatures: function() {
		return Backbone.sync("fetch", this, {async: false}).responseJSON;
	}
});

module.exports = new Features();
