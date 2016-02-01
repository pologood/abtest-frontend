import React from 'react';
import ExperimentStore from "../../stores/Experiment";
import { History } from 'react-router';
import reactMixin from 'react-mixin';

function getExperimentsState() {
	return {
		experiments: ExperimentStore.getExperiments()
	};
}

class Experiments extends React.Component {

	constructor(props) {
		super(props);
		this.state = getExperimentsState();
	}

	componentDidMount() {
		this.onChangeBinded = this._onChange.bind(this);
		ExperimentStore.addChangeListener(this.onChangeBinded);
	}

	componentWillUnmount() {
		ExperimentStore.removeChangeListener(this.onChangeBinded);
	}

	render() {
		const Items = require('./Items.js');

		return (
			<div className="container">
				<div className="page-header">
					<h1>Experiências</h1>
					<button className="btn btn-primary btn-xs pull-right" onClick={this._openCreationPage.bind(this)}>
						Cadastrar experimento
					</button>
				</div>
				<Items experiments={this.state.experiments}/>			
			</div>
		);
	}

	_openCreationPage() {
		this.history.pushState(null, '/experiments/form');
	}

	_onChange() {
		this.state = getExperimentsState();
		this.setState(this.state);
	}
}

reactMixin.onClass(Experiments, History);

module.exports = Experiments;
