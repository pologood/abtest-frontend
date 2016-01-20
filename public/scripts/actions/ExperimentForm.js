const AppDispatcher = require('../config/AppDispatcher'),
	ExperimentFormConstants = require('../constants/ExperimentForm'),
	ExperimentAjax = require('../models/experiments/Experiment'),
	ExperimentModel = require('../models/experiments/ExperimentModel');

function createExperiment(experiment) {
	if (experiment.id)
		ExperimentAjax.update(experiment);

	var promise = new ExperimentModel().save(experiment);
	promise.then(() => {
		AppDispatcher.dispatch({
			actionType: ExperimentFormConstants.LOADEDCREATE
		});
	});
	promise.error(() => {
		AppDispatcher.dispatch({
			actionType: ExperimentFormConstants.ERRORCREATE
		});
	});
}

class ExperimentForm {
	createForm (id) {
		AppDispatcher.dispatch({
			actionType: ExperimentFormConstants.CREATEFORM,
			id : id
		});
	}

	updateVariation (hash, name, enabled) {
		AppDispatcher.dispatch({
			actionType: ExperimentFormConstants.UPDATEVARIATION,
			hash : hash,
			name : name,
			enabled: enabled
		});
	}

	createVariation () {
		AppDispatcher.dispatch({
			actionType: ExperimentFormConstants.CREATEVARIATION,
		});
	}

	deleteVariation (hash) {
		AppDispatcher.dispatch({
			actionType: ExperimentFormConstants.DELETEVARIATION,
			hash : hash
		});
	}

	createWhiteItem (name, type) {
		AppDispatcher.dispatch({
			actionType: ExperimentFormConstants.CREATEWHITEITEM,
			name : name,
			type: type
		});
	}

	deleteWhiteItem (name, type) {
		AppDispatcher.dispatch({
			actionType: ExperimentFormConstants.DELETEWHITEITEM,
			name : name,
			type: type
		});
	}

	create (name, description, enabled, percentage, domains, groups, users, variations) {
		var experiment = {
			name: name,
			description: description,
			percentage: percentage,
			enabled: enabled,
			domains: domains,
			groups: groups,
			users: users,
			variations: variations
		};

		AppDispatcher.dispatch({
			actionType: ExperimentFormConstants.LOADINGCREATE,
			experiment: experiment
		});

		createExperiment(experiment);
	}
}

module.exports = new ExperimentForm();