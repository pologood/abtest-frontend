import React from 'react';
import ExperimentStore from "../../stores/Experiment";
import ExperimentActions from '../../actions/Experiment';

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
		ExperimentStore.addChangeListener(this._onChange.bind(this));
	}

	componentWillUnmount() {
		ExperimentStore.removeChangeListener(this._onChange.bind(this));
	}

	render() {
		const ListItems = require('./ExperimentItems.js');

		return (
			<div className="container">
				<div className="page-header">
					<h1>Experiências</h1>
					<button className="btn btn-primary btn-xs pull-right" onClick={this._openCreationPage.bind(this)}>
						Cadastrar experimento
					</button>
				</div>
				<ListItems experiments={this.state.experiments}/>			
			</div>
		);
	}

	_openCreationPage() {
		window.location.hash = "/experiments/create";
	}

	_onChange() {
		this.state = getExperimentsState();
		this.setState(this.state);
	}
}

module.exports = Experiments;
