import Experiment from "./ExperimentModel";
import Backbone from 'backbone';
import app from "../../app";

class Experiments extends Backbone.Collection {

	constructor() {
		super();
		this.model = Experiment;
		this.url = app.backendUrl + '/experiments';
	}

	getExperiments() {
		return Backbone.sync("fetch", this, {async: false}).responseJSON;
	}
};

module.exports = new Experiments();
