const React = require('react'),
	FeatureStore = require("stores/Feature"),
	rb = require('react-bootstrap'),
	FeatureActions = require('actions/Feature');

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
		const PageHeader = rb.PageHeader,
			ListGroup = rb.ListGroup,
			Button = rb.Button,
			ListItems = require('./widgets/ListItems');

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
		window.location.href = "#/features/create";
	}

	_onChange() {
		this.setState(getFeaturesState());
	}
}

module.exports = Features;
