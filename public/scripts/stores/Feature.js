const AppDispatcher = require('../dispatcher/AppDispatcher'),
	EventEmitter = require('events'),
	assign = require('object-assign'),
	FeatureConstants = require('constants/Feature'),
	FeatureModel = require('features/FeatureModel'),
	FeatureCollection = require('features/FeatureCollection');

const CHANGE_EVENT = 'change';

var features = [
	{id: 1, name: 'Nova DefaultFrame (Filtros)', enabled: true},
	{id: 2, name: 'Alterações da Home dos Portais', enabled: false},
	{id: 3, name: 'Nova DefaultFrame (Grid)', enabled: false}
];

function enabling(featureId, enabled) {
	// FeatureModel.enable();

	for (var i = 0, len = features.length; i < len; i++)
		if (features[i].id == featureId)
			return features[i].enabled = enabled;

}

function createFeature(feature) {
	// TODO: Implementar lógica backbone
	features.push(feature);
}

const Feature = assign({}, EventEmitter.prototype, {

	getFeatures: function() {
    return FeatureModel.getFeatures();
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
