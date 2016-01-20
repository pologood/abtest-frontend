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
}

module.exports = new Experiment();
