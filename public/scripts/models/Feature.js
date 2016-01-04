const app = require("app");

var Feature = Backbone.Model.extend({
	urlRoot: app.backendUrl + '/features',
	idAttribute: '_id',

	disable : function() {
		this.toggleStatus(false);
	},

	enable : function() {
		this.toggleStatus(true);
	},

	toggleStatus : function(status) {
		this.save({enabled: status});
	}

});

var Features = Backbone.Collection.extend({
	model: Feature,
	url: '/features',

	getFeature: function(feature) {
		this.models[feature];
	}
});

module.exports = new Features();
