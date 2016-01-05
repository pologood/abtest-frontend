const AppDispatcher = require('../config/AppDispatcher'),
	FeatureConstants = require('../constants/Feature');

class Feature {
	toggleEnable (featureId, enabled) {
		AppDispatcher.dispatch({
			actionType: FeatureConstants.ENABLING,
			featureId: featureId,
			enabled: enabled
		});
	}
	create (name, description, domainList, groupList, userList) {
		AppDispatcher.dispatch({
			actionType: FeatureConstants.CREATE,
			feature: {
				name: name,
				description: description,
				domainList: domainList,
				groupList: groupList,
				userList: userList
			}
		});
	}
}

module.exports = new Feature();
