import React from 'react';
import ExperimentCreateActions from "../../actions/ExperimentCreate";

class CreateWhiteListItems extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		var whiteItems = this.props.items,
			whiteItemsList = [],
			whiteItemsEls = [],
			whiteItemsUser = whiteItems.user,
			whiteItemsDomain = whiteItems.domain,
			whiteItemsGroup = whiteItems.group;

		var buttonColor, icon;

		if (whiteItems) {
			for (var i = 0; i < whiteItemsUser.length; i++)
				whiteItemsList.push({name:whiteItemsUser[i],type:"user"});

			for (var i = 0; i < whiteItemsDomain.length; i++)
				whiteItemsList.push({name:whiteItemsDomain[i],type:"domain"});
			
			for (var i = 0; i < whiteItemsGroup.length; i++)
				whiteItemsList.push({name:whiteItemsGroup[i],type:"group"});
		}

		if (whiteItemsList) {
			for (var i = 0; i < whiteItemsList.length; i++) {
				var item = whiteItemsList[i];
				if (item.type == "user") {
					buttonColor = "btn btn-success btn-xs";
					icon = "glyphicon glyphicon-user";
				} else if (item.type == "group"){
					buttonColor = "btn btn-primary btn-xs";
					icon = "glyphicon glyphicon-hdd";
				} else {
					buttonColor = "btn btn-info btn-xs";
					icon = "glyphicon glyphicon-globe";
				}

				whiteItemsEls.push(
					<button key={i} className={buttonColor} type="button">
						<span className={icon}></span> {item.name} &nbsp;
						<span className="glyphicon glyphicon-remove" onClick={this._deleteWhiteItem.bind(this, item)}></span>
					</button>
				)
			}
		}
		return (
			<div className="btn-toolbar">
				{whiteItemsEls}	
			</div>
		);
	}

	_deleteWhiteItem(item) {
		ExperimentCreateActions.deleteWhiteItem(item.name, item.type);
	}
}

module.exports = CreateWhiteListItems;