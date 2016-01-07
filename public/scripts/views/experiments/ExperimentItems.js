import React from 'react';
import ExperimentActions from '../../actions/Experiment';
import Switch from 'react-bootstrap-switch';

class ListItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {experiments: this.props.experiments};
	}

	render() {
		var listItems = [],
			stateItems = this.props.experiments,
			item = null;
			
		if (stateItems) {
			for (var i = 0, len = stateItems.length; i < len; i++) {
				item = stateItems[i];
				listItems.push(
					<li className="list-group-item">
						<h5>{i + 1} - {item.name}</h5>
						<div className="btn-group pull-right">
							<Switch className="toogle-experiment" size='mini' state={item.enabled} onChange={this.toggleEnable.bind(this, item)}/>
						</div>
					</li>
				);
			}
		}

		return (
			<div>
				<ul className="list-group">
					{listItems}
				</ul>
			</div>
		);
	}

	toggleEnable(item) {
		ExperimentActions.toggleEnable(item.id, !item.enabled);
	}
}

module.exports = ListItem;
