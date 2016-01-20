import AppDispatcher from '../config/AppDispatcher';
import EventEmitter from 'events';
import assign from 'object-assign';
import ExperimentConstants from '../constants/Experiment';
import ExperimentModel from '../models/experiments/ExperimentModel';
import ExperimentCollection from '../models/experiments/ExperimentCollection';
import ExperimentAjax from '../models/experiments/Experiment';

const CHANGE_EVENT = 'change';

function enabling(featureId, enabled, callback) {
	ExperimentAjax.enabling(featureId, enabled, callback);
}

const Experiment = assign({}, EventEmitter.prototype, {

	getExperiments: function() {
	    return ExperimentCollection.getExperiments();
	},

	getExperiment: function(id, callback) {
		return ExperimentAjax.get(id, callback);
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
			enabling(action.experimentId, action.enabled, function(){
				Experiment.emitChange();
			});
			break;

		default:
	}
});

module.exports = Experiment;
