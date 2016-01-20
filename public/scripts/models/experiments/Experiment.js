import app from "../../app";
import Ajax from "ajax-abstraction";

class Experiment {
	
	enabling(featureId, enabled, callback) {
		return Ajax.call({
			method: "PUT",
			url: app.backendUrl + "/experiments/" + featureId + "/enabling",
			data: enabled,
			contentType: "application/json",
			success: callback
		});
	}

	get(id, callback) {
		return Ajax.call({
			url: app.backendUrl + "/experiments/" + id,
			contentType: "application/json",
			success: callback,
			async: "false"
		});
	}

	update(data, callback) {
		return Ajax.call({
			method: "PUT",
			url: app.backendUrl + "/experiments",
			contentType: "application/json",
			success: callback
		});
	}

	create(data) {
		return Ajax.call({
			method: "POST",
			url: app.backendUrl + "/experiments",
			data: data,
			contentType: "application/json"
		});
	}
}

module.exports = new Experiment();