const AppDispatcher = require('../dispatcher/AppDispatcher'),
	FeatureConstants = require('../constants/Feature');

class Feature {
	toggleEnable (featureId, enabled) {
		AppDispatcher.dispatch({
			actionType: FeatureConstants.TOGGLE_ENABLE,
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