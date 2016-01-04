const app = require("app");

var Feature = Backbone.Model.extend({
	urlRoot: app.backendUrl + '/features',
	idAttribute: '_id',

	getFeatures : function(){
		return Backbone.sync("fetch", this, {async: false}).responseJSON;
	},

	enabling : function() {
		this.toggleStatus(false);
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
