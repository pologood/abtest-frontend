import React from 'react';
import FeatureActions from '../../actions/Feature';

class ListItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {features: this.props.features};
	}

	render() {
		const rb = require('react-bootstrap'),
			ListGroupItem = rb.ListGroupItem,
			ButtonGroup = rb.ButtonGroup,
			Button = rb.Button;

		var listItems = [],
			stateItems = this.state.features,
			item = null;

		if (stateItems) {
			for (var i = 0, len = stateItems.length; i < len; i++) {
				item = stateItems[i];
				var styleBtn = !item.enabled ? "success" : "danger";
				var enableBtnText = item.enabled ? "Desabilitar" : "Habilitar";

				listItems.push(
					<ListGroupItem key={item.id}>
						{i + 1} - {item.name}
						<ButtonGroup className="pull-right">
							<Button bsSize="xs"
									bsStyle={styleBtn}
									onClick={this.toggleEnable.bind(this, item)}>{enableBtnText}</Button>
						</ButtonGroup>
					</ListGroupItem>
				);
			}
		}

		return (
			<div>
				{listItems}
			</div>
		);
	}

	toggleEnable(item) {
		FeatureActions.toggleEnable(item.id, !item.enabled);
	}
}

module.exports = ListItem;
