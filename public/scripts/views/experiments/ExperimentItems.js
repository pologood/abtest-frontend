import React from 'react';
import ExperimentActions from '../../actions/Experiment';
import Switch from 'react-bootstrap-switch';

class ListItem extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const Experiment = require('./Experiment');
		var me = this,
			experimentsEls = [],
			experiments = this.props.experiments || [];

		experiments.forEach((experiment, index) => {
			experimentsEls.push(me._formatItem(experiment, index));
		});

		return (
			<div>
				<div className="list-group">
					{experimentsEls}
				</div>
				<Experiment ref="experimentModal"/>
			</div>
		);
	}

	_formatItem(item, index) {
		return (
			<a href="#" className="list-group-item" key={item.id}
				onClick={this._openModal.bind(this, item.id)}>
				<h5>{index + 1} - {item.name}</h5>
				<div className="btn-group pull-right">
					<Switch className="toogle-experiment" size='mini' state={item.enabled} 
							onChange={this._toggleEnable.bind(this, item)}/>
				</div>
			</a>
		);
	}

	_openModal(id) {
		this.refs.experimentModal.show(id);
	}

	_toggleEnable(item) {
		ExperimentActions.toggleEnable(item.id, !item.enabled);
	}
}

module.exports = ListItem;
