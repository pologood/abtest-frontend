import Feature from "./FeatureModel";
import Backbone from 'backbone';
import app from "../../app";

class Features extends Backbone.Collection {

	constructor() {
		super();
		this.model = Feature;
		this.url = app.backendUrl + '/features';
	}

	getFeatures() {
		return Backbone.sync("fetch", this, {async: false}).responseJSON;
	}
};

module.exports = new Features();
