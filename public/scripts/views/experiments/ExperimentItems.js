import React from 'react';
import ExperimentActions from '../../actions/Experiment';
import Switch from 'react-bootstrap-switch';

class ListItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {experiments: this.props.experiments};
	}

	render() {
		const rb = require('react-bootstrap'),
			ListGroupItem = rb.ListGroupItem,
			ButtonGroup = rb.ButtonGroup,
			Button = rb.Button;

		var listItems = [],
			stateItems = this.state.experiments,
			item = null;

		if (stateItems) {
			for (var i = 0, len = stateItems.length; i < len; i++) {
				item = stateItems[i];
				listItems.push(
					<ListGroupItem key={item.id}>
						<font className="default-font">{i + 1} - {item.name}</font>
						<ButtonGroup className="pull-right">
							<Switch className="toogle-experiment" size='mini' state={item.enabled} onClick={this.toggleEnable.bind(this, item)}/>
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
		var experiments = this.state.experiments;
		var index = experiments.indexOf(item);
		experiments[index].enabled = !(experiments[index].enabled)
		this.setState(experiments);
	}
}

module.exports = ListItem;
