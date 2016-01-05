import AppDispatcher from '../config/AppDispatcher';
import EventEmitter from 'events';
import assign from 'object-assign';
import ExperienceConstants from '../constants/Experience';
import ExperienceModel from '../models/experiences/ExperienceModel';
import ExperienceCollection from '../models/experiences/ExperienceCollection';

const CHANGE_EVENT = 'change';

function enabling(featureId, enabled) {
	// TO-DO: Implementar lógica
}

function createExperience(experience) {
	ExperienceModel.save(feature);
}

const Experience = assign({}, EventEmitter.prototype, {

	getExperiences: function() {
	    return ExperienceCollection.getExperiences();
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

AppDispatcher.register(function(action) {

	switch(action.actionType) {
		case ExperienceConstants.ENABLING:
			enabling(action.experienceId, action.enabled);
			Experience.emitChange();
			break;

		case ExperienceConstants.CREATE:
			createExperience(action.experience);
			Experience.emitChange();
			break;

		default:
	}
});

module.exports = Experience;
