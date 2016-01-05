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
	create (name, description, percentage, domains, groups, users) {
		AppDispatcher.dispatch({
			actionType: ExperienceConstants.CREATE,
			experience: {
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

module.exports = new Experience();
