import AppDispatcher from '../config/AppDispatcher';
import EventEmitter from 'events';
import assign from 'object-assign';
import ExperimentConstants from '../constants/Experiment';
import ExperimentModel from '../models/experiments/ExperimentModel';
import ExperimentCollection from '../models/experiments/ExperimentCollection';

const CHANGE_EVENT = 'change';

function enabling(featureId, enabled) {
	// TO-DO: Implementar lógica
}

function createExperiment(experiment) {
	ExperimentModel.save(experiment);
}

const Experiment = assign({}, EventEmitter.prototype, {

	getExperiments: function() {
	    return ExperimentCollection.getExperiments();
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
		case ExperimentConstants.ENABLING:
			enabling(action.experimentId, action.enabled);
			Experiment.emitChange();
			break;

		case ExperimentConstants.CREATE:
			createExperiment(action.experiment);
			Experiment.emitChange();
			break;

		default:
	}
});

module.exports = Experiment;
