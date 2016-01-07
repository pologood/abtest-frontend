import React from 'react';
import ExperimentCreateActions from "../../actions/ExperimentCreate";

class CreateWhiteListItems extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var whiteItems = this.props.items;
		var whiteItemsEls = [];

		var buttonColor, icon;

		if (whiteItems) {
			for (var i = 0; i < whiteItems.length; i++) {
				var item = whiteItems[i];
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
					<button key={item.hash} className={buttonColor} type="button">
						<span className={icon}></span> {item.name} &nbsp;
						<span className="glyphicon glyphicon-remove" onClick={this._deleteWhiteItem.bind(this, item.hash)}></span>
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

	_deleteWhiteItem(hash) {
		ExperimentCreateActions.deleteWhiteItem(hash);
	}
}

module.exports = CreateWhiteListItems;