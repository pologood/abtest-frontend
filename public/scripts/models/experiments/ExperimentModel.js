import Backbone from 'backbone';
import app from "../../app";

var Experiment = Backbone.Model.extend({
	url: app.backendUrl + '/experiments',
	idAttribute: 'id',

	enabling : function(status) {
		this.save({enabled: status});
	}

});

module.exports = Experiment;
