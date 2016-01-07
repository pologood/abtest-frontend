import React from 'react';

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
					<button key={i} className={buttonColor} type="button">
						<span className={icon}></span> {item.name} &nbsp;
						<span className="glyphicon glyphicon-remove" onClick={this.props.remove.bind(this, i)}></span>
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
}

module.exports = CreateWhiteListItems;