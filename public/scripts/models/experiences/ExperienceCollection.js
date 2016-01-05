import Experience from "./ExperienceModel";
import Backbone from 'backbone';
import app from "../../app";

class Experiences extends Backbone.Collection {

	constructor() {
		super();
		this.model = Experience;
		this.url = app.backendUrl + '/experiences';
	}

	getExperiences() {
		return Backbone.sync("fetch", this, {async: false}).responseJSON;
	}
};

module.exports = new Experiences();
