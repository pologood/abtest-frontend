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

}

module.exports = new Experiment();