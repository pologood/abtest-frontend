import React from 'react';
import ExperienceStore from "../../stores/Experience";
import ExperienceActions from '../../actions/Experience';

function getExperiencesState() {
	return {
		features: ExperienceStore.getExperiences()
	};
}

class Experiences extends React.Component {

	constructor(props) {
		super(props);
		this.state = getExperiencesState();
	}

	componentDidMount() {
		ExperienceStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		ExperienceStore.removeChangeListener(this._onChange);
	}

	render() {
		const rb = require('react-bootstrap'),
			ListItems = require('./ExperienceItems.js'),
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
					<ListItems experiences={this.state.experiences}/>
				</ListGroup>
			</div>
		);
	}

	_openCreationPage() {
		window.location.hash = "/experiences/create";
	}

	_onChange() {
		this.setState(getExperiencesState());
	}
}

module.exports = Experiences;
