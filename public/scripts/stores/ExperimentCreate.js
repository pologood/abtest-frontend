import AppDispatcher from '../config/AppDispatcher';
import EventEmitter from 'events';
import assign from 'object-assign';
import ExperimentCreateConstants from '../constants/ExperimentCreate';

const CHANGE_EVENT = 'changeExperimentCreate';

var variations = [
	{
		hash: new Date().getTime(),
		name: "original",
		enabled: true
	}
];

var whiteItems = [],
	user = [],
	group = [],
	domain = [];

function updateVariation(hash, name, enabled) {
	var item = {
		hash : hash,
		name : name,
		enabled : enabled
	};

	for (var i = 0; i < variations.length; i++)
		if(variations[i].hash == item.hash)
			return variations[i] = item;
}

function createVariation() {
	var item = {
		hash: new Date().getTime()
	};
	variations.push(item);
}

function deleteVariation(hash) {
	for (var i = 0; i < variations.length; i++)
		if(variations[i].hash == hash)
			return variations.splice(i, 1);
}

function createWhiteItem (name, type) {
	switch(type) {
	    case "domain":
	        domain.push(name);
	        break;
	    case "group":
	        group.push(name);
	        break;
	   	case "user":
	        user.push(name);
	        break;
	}
}

function deleteWhiteItem (name, type) {
	switch(type) {
	    case "domain":
	        domain.splice(domain.indexOf(name),1);
	        break;
	    case "group":
	    	group.splice(group.indexOf(name),1);       
	        break;
	   	case "user":
	   		user.splice(user.indexOf(name),1);        
	        break;
	}
}

const ExperimentCreate = assign({}, EventEmitter.prototype, {

	getVariations: function() {
	    return variations;
	},

	getWhiteItemsUser: function() {
	    return user;
	},

	getWhiteItemsDomain: function() {
	    return domain;
	},

	getWhiteItemsGroup: function() {
	    return group;
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