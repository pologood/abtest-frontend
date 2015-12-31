var Feature = Backbone.Model.extend({
	urlRoot: '/features',
	idAttribute: '_id',

	getFeatures : function(){
		return this.fetch();
	},

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

module.exports = Feature;