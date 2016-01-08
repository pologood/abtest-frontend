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
	create (name, description, enabled, percentage, domains, groups, users, variations) {
		AppDispatcher.dispatch({
			actionType: ExperimentConstants.CREATE,
			experiment: {
				name: name,
				description: description,
				percentage: percentage,
				enabled: enabled,
				domains: domains,
				groups: groups,
				users: users,
				variations: variations
			}
		});
	}
}

module.exports = new Experiment();
