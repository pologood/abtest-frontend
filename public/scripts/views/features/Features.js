import React from 'react';
import FeatureStore from "../../stores/Feature";
import FeatureActions from '../../actions/Feature';

function getFeaturesState() {
	return {
		features: FeatureStore.getFeatures()
	};
}

class Features extends React.Component {

	constructor(props) {
		super(props);
		this.state = getFeaturesState();
	}

	componentDidMount() {
		FeatureStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		FeatureStore.removeChangeListener(this._onChange);
	}

	render() {
		const rb = require('react-bootstrap'),
			ListItems = require('./FeatureItems.js'),
			PageHeader = rb.PageHeader,
			ListGroup = rb.ListGroup,
			Button = rb.Button;

		return (
			<div className="container">
				<PageHeader>
					Features
					<Button className="pull-right"
							bsSize="xs"
							bsStyle="primary"
							onClick={this._openCreationPage.bind(this)}>Cadastrar feature</Button>
				</PageHeader>
				<ListGroup>
					<ListItems features={this.state.features}/>
				</ListGroup>
			</div>
		);
	}

	_openCreationPage() {
		window.location.hash = "/features/create";
	}

	_onChange() {
		this.setState(getFeaturesState());
	}
}

module.exports = Features;
