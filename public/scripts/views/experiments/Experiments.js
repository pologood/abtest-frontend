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
		ExperimentStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		ExperimentStore.removeChangeListener(this._onChange);
	}

	render() {
		const rb = require('react-bootstrap'),
			ListItems = require('./ExperimentItems.js'),
			PageHeader = rb.PageHeader,
			ListGroup = rb.ListGroup,
			Button = rb.Button;

		return (
			<div className="container">
				<PageHeader>
					Experiências
					<Button className="pull-right"
							bsSize="xs"
							bsStyle="primary"
							onClick={this._openCreationPage.bind(this)}>Cadastrar experimento</Button>
				</PageHeader>
				<ListGroup>
					<ListItems experiments={this.state.experiments}/>
				</ListGroup>
			</div>
		);
	}

	_openCreationPage() {
		window.location.hash = "/experiments/create";
	}

	_onChange() {
		this.setState(getExperimentsState());
	}
}

module.exports = Experiments;
