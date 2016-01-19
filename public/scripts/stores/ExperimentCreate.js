import AppDispatcher from '../config/AppDispatcher';
import EventEmitter from 'events';
import assign from 'object-assign';
import ExperimentCreateConstants from '../constants/ExperimentCreate';

const CHANGE_EVENT = 'changeExperimentCreate';

var formItem = {};

function createForm (callback) {
	formItem = {
		percentage: 50,
		variations: [],
		users: [],
		groups: [],
		domains: []
	}
	callback();
}

function createUpdateForm (experiment) {
	formItem = experiment;
}

function updateVariation(hash, name, enabled) {
	var item = {
		hash : hash,
		name : name,
		enabled : enabled
	};

	for (var i = 0; i < formItem.variations.length; i++)
		if(formItem.variations[i].hash == item.hash)
			return formItem.variations[i] = item;
}

function createVariation() {
	var item = {
		hash: new Date().getTime()
	};
	formItem.variations.push(item);
}

function deleteVariation(hash) {
	for (var i = 0; i < formItem.variations.length; i++)
		if(formItem.variations[i].hash == hash)
			return formItem.variations.splice(i, 1);
}

function createWhiteItem (name, type) {
	switch(type) {
	    case "domain":
	        formItem.domains.push(name);
	        break;
	    case "group":
	        formItem.groups.push(name);
	        break;
	   	case "user":
	        formItem.users.push(name);
	        break;
	}
}

function deleteWhiteItem (name, type) {
	switch(type) {
	    case "domain":
	        formItem.domains.splice(domains.indexOf(name),1);
	        break;
	    case "group":
	    	formItem.groups.splice(groups.indexOf(name),1);       
	        break;
	   	case "user":
	   		formItem.users.splice(users.indexOf(name),1);        
	        break;
	}
}

const ExperimentCreate = assign({}, EventEmitter.prototype, {

	getFormItem: function () {
		return formItem;
	},

	getVariations: function() {
		return variations;
	},

	getWhiteItemsUser: function() {
	    return users;
	},

	getWhiteItemsDomain: function() {
	    return domains;
	},

	getWhiteItemsGroup: function() {
	    return groups;
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
		case ExperimentCreateConstants.CREATEFORM:
			if (action.id) {
				const ExperimentStore = require('./Experiment');
				ExperimentStore.getExperiment(action.id, function (experiment) {
					createUpdateForm(experiment);
					ExperimentCreate.emitChange();
				});
			} else {
				createForm(function() {
					ExperimentCreate.emitChange();	
				});
			}
			break;

		case ExperimentCreateConstants.UPDATEVARIATION:
			updateVariation(action.hash, action.name, action.enabled);
			ExperimentCreate.emitChange();
			break;

		case ExperimentCreateConstants.CREATEVARIATION:
			createVariation();
			ExperimentCreate.emitChange();
			break;

		case ExperimentCreateConstants.DELETEVARIATION:
			deleteVariation(action.hash);
			ExperimentCreate.emitChange();
			break;

		case ExperimentCreateConstants.CREATEWHITEITEM:
			createWhiteItem(action.name, action.type);
			ExperimentCreate.emitChange();
			break;

		case ExperimentCreateConstants.DELETEWHITEITEM:
			deleteWhiteItem(action.name, action.type);
			ExperimentCreate.emitChange();
			break;

		default:
	}
});

module.exports = ExperimentCreate;