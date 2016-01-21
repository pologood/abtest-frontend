import AppDispatcher from '../config/AppDispatcher';
import EventEmitter from 'events';
import assign from 'object-assign';
import ExperimentFormConstants from '../constants/ExperimentForm';
import LoadingConstants from '../constants/Loading';

const CHANGE_EVENT = 'changeExperimentForm';

var formItem = {};

function createForm () {
	formItem = {
		percentage: 50,
		variations: [],
		users: [],
		groups: [],
		domains: []
	}
}

function createUpdateForm (experiment) {
	formItem = experiment;
}

function updateVariation(hash, name) {
	var item = {
		hash : hash,
		name : name
	};

	formItem.variations.some((variation, index) => {
		if(variation.hash == item.hash)
			return formItem.variations[index] = item;
	});
}

function createVariation() {
	var item = {
		hash: new Date().getTime()
	};
	formItem.variations.push(item);
}

function deleteVariation(hash) {
	formItem.variations.some((variation, index) => {
		if(variation.hash == hash)
			return formItem.variations.splice(index, 1);
	});
}

function createWhiteItem (name, type) {
	var list = getWhiteListByType(type);
	list.push(name);
}

function deleteWhiteItem (name, type) {
	var list = getWhiteListByType(type);
	list.splice(list.indexOf(name), 1)
}

function getWhiteListByType (type) {
	switch(type) {
	    case "domain":
	        return formItem.domains;
	    case "group":
	    	return formItem.groups;       
	   	case "user":
	   		return formItem.users;
	}
}

const ExperimentForm = assign({}, EventEmitter.prototype, {

	getFormItem: function () {
		return formItem;
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
			createForm()
			ExperimentForm.emitChange();
			break;

		case ExperimentFormConstants.UPDATEVARIATION:
			updateVariation(action.hash, action.name);
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