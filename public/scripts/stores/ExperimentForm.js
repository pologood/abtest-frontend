import AppDispatcher from '../config/AppDispatcher';
import EventEmitter from 'events';
import assign from 'object-assign';
import ExperimentFormConstants from '../constants/ExperimentForm';
import LoadingConstants from '../constants/Loading';

const CHANGE_EVENT = 'changeExperimentForm';

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
	        formItem.domains.splice(formItem.domains.indexOf(name),1);
	        break;
	    case "group":
	    	formItem.groups.splice(formItem.groups.indexOf(name),1);       
	        break;
	   	case "user":
	   		formItem.users.splice(formItem.users.indexOf(name),1);        
	        break;
	}
}

const ExperimentForm = assign({}, EventEmitter.prototype, {

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
		case ExperimentFormConstants.CREATEFORM:
			if (action.id) {
				const ExperimentStore = require('./Experiment');
				ExperimentStore.getExperiment(action.id, function (experiment) {
					createUpdateForm(experiment);
					ExperimentForm.emitChange();
				});
			} else {
				createForm(function() {
					ExperimentForm.emitChange();	
				});
			}
			break;

		case ExperimentFormConstants.UPDATEVARIATION:
			updateVariation(action.hash, action.name, action.enabled);
			ExperimentForm.emitChange();
			break;

		case ExperimentFormConstants.CREATEVARIATION:
			createVariation();
			ExperimentForm.emitChange();
			break;

		case ExperimentFormConstants.DELETEVARIATION:
			deleteVariation(action.hash);
			ExperimentForm.emitChange();
			break;

		case ExperimentFormConstants.CREATEWHITEITEM:
			createWhiteItem(action.name, action.type);
			ExperimentForm.emitChange();
			break;

		case ExperimentFormConstants.DELETEWHITEITEM:
			deleteWhiteItem(action.name, action.type);
			ExperimentForm.emitChange();
			break;

		case ExperimentFormConstants.LOADINGCREATE:
			formItem.creationState = LoadingConstants.LOADING;
			ExperimentForm.emitChange();
			break;

		case ExperimentFormConstants.LOADEDCREATE:
			formItem.creationState = LoadingConstants.LOADED;
			ExperimentForm.emitChange();
			break;

		case ExperimentFormConstants.ERRORCREATE:
			formItem.creationState = LoadingConstants.ERROR;
			ExperimentForm.emitChange();
			break;
			
		default:
	}
});

module.exports = ExperimentForm;