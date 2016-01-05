import Backbone from 'backbone';
import app from "../../app";

var Feature = Backbone.Model.extend({
	url: app.backendUrl + '/features',
	idAttribute: '_id',

	enabling : function(status) {
		this.save({enabled: status});
	}

});

module.exports = new Feature();
