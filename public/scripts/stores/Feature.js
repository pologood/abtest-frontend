import AppDispatcher from '../config/AppDispatcher';
import EventEmitter from 'events';
import assign from 'object-assign';
import FeatureConstants from '../constants/Feature';
import FeatureModel from '../models/features/FeatureModel';
import FeatureCollection from '../models/features/FeatureCollection';

const CHANGE_EVENT = 'change';

function enabling(featureId, enabled) {
	// TO-DO: Implementar lógica
}

function createFeature(feature) {
	FeatureModel.save(feature);
}

const Feature = assign({}, EventEmitter.prototype, {

	getFeatures: function() {
	    return FeatureCollection.getFeatures();
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
		case FeatureConstants.ENABLING:
			enabling(action.featureId, action.enabled);
			Feature.emitChange();
			break;

		case FeatureConstants.CREATE:
			createFeature(action.feature);
			Feature.emitChange();
			break;

		default:
	}
});

module.exports = Feature;
