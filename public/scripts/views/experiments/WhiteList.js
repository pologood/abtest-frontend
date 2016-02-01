import React from 'react';
import ExperimentFormActions from "../../actions/ExperimentForm";

class CreateWhiteListItems extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="btn-toolbar">
				{this._getWhiteItemsEls()}	
			</div>
		);
	}

	_getWhiteItemsEls() {
		var whiteItemsEls = [],
			whiteItems = this.props.items || [];
		this._unifiedList = [],

		this._addToUnifiedList(whiteItems.users, "user");
		this._addToUnifiedList(whiteItems.domains, "domain");
		this._addToUnifiedList(whiteItems.groups, "group");

		this._unifiedList.forEach((item, index) => {
			whiteItemsEls.push(this._getWhiteItemEl(item, index));
		});
		return whiteItemsEls;
	}

	_addToUnifiedList(list = [], type) {
		for (let item of list)
			this._unifiedList.push({
				name: item,
				type: type
			});
	}

	_getWhiteItemEl(item, index) {
		let styleConfig = this._getButtonStyleByType(item.type)

		return (
			<button key={index} className={styleConfig.buttonColor} type="button">
				<span className={styleConfig.icon}></span> {item.name} &nbsp;
				{this._getRemoveBtnEl(item)}
			</button>
		);
	}

	_getRemoveBtnEl(item) {
		if (!this.props.hideRemoveBtn)
			return <span className="glyphicon glyphicon-remove" onClick={this._deleteWhiteItem.bind(this, item)}></span>;
	}

	_getButtonStyleByType(type) {
		var buttonColor = "btn btn-xs btn-",
			icon = "glyphicon glyphicon-";

		switch(type) {
			case "user":
				buttonColor += "success";
				icon += "user";
				break;
			case "group":
				buttonColor += "primary";
				icon += "hdd";
				break;
			default:
				buttonColor += "info";
				icon += "globe";
		}

		return { buttonColor, icon };
	}

	_deleteWhiteItem(item) {
		ExperimentFormActions.deleteWhiteItem(item.name, item.type);
	}
}

module.exports = CreateWhiteListItems;