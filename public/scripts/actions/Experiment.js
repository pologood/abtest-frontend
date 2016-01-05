const AppDispatcher = require('../config/AppDispatcher'),
	ExperimentConstants = require('../constants/Experiment');

class Experiment {
	toggleEnable (experimentId, enabled) {
		AppDispatcher.dispatch({
			actionType: ExperimentConstants.ENABLING,
			experimentId: experimentId,
			enabled: enabled
		});
	}
	create (name, description, percentage, domains, groups, users) {
		AppDispatcher.dispatch({
			actionType: ExperimentConstants.CREATE,
			experiment: {
				name: name,
				description: description,
				percentage: percentage,
				domains: domains,
				groups: groups,
				users: users
			}
		});
	}
}

module.exports = new Experiment();
