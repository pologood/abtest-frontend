const AppDispatcher = require('../config/AppDispatcher'),
	ExperienceConstants = require('../constants/Experience');

class Experience {
	toggleEnable (experienceId, enabled) {
		AppDispatcher.dispatch({
			actionType: ExperienceConstants.ENABLING,
			experienceId: experienceId,
			enabled: enabled
		});
	}
	create (name, description, domainList, groupList, userList) {
		AppDispatcher.dispatch({
			actionType: ExperienceConstants.CREATE,
			experience: {
				name: name,
				description: description,
				domainList: domainList,
				groupList: groupList,
				userList: userList
			}
		});
	}
}

module.exports = new Experience();
