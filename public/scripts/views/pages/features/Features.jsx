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
				FeatureActions.create("teste", "description");

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
			listItems = require('./widgets/ListItems');

		return (
			<div>
				<PageHeader>
					Features
					<Button className="pull-right"
							bsSize="xs"
							bsStyle="primary"
							onClick={this._openCreationPage.bind(this)}>Criar feature</Button>
				</PageHeader>
				<ListGroup>
					<listItems features={this.state.features}/>
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