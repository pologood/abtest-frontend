import Backbone from 'backbone';
import app from "../../app";

var Experience = Backbone.Model.extend({
	url: app.backendUrl + '/experiences',
	idAttribute: '_id',

	enabling : function(status) {
		this.save({enabled: status});
	}

});

module.exports = new Experience();
