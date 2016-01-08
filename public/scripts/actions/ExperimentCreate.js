const AppDispatcher = require('../config/AppDispatcher'),
	ExperimentCreateConstants = require('../constants/ExperimentCreate');

class ExperimentCreate {
	updateVariation (hash, name, enabled) {
		AppDispatcher.dispatch({
			actionType: ExperimentCreateConstants.UPDATEVARIATION,
			hash : hash,
			name : name,
			enabled: enabled
		});
	}

	createVariation () {
		AppDispatcher.dispatch({
			actionType: ExperimentCreateConstants.CREATEVARIATION,
		});
	}

	deleteVariation (hash) {
		AppDispatcher.dispatch({
			actionType: ExperimentCreateConstants.DELETEVARIATION,
			hash : hash
		});
	}

	createWhiteItem (name, type) {
		AppDispatcher.dispatch({
			actionType: ExperimentCreateConstants.CREATEWHITEITEM,
			name : name,
			type: type
		});
	}

	deleteWhiteItem (name, type) {
		AppDispatcher.dispatch({
			actionType: ExperimentCreateConstants.DELETEWHITEITEM,
			name : name,
			type: type
		});
	}
}

module.exports = new ExperimentCreate();