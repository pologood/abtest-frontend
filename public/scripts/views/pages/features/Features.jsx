const React = require('react'),
	FeatureStore = require("stores/Feature"),
	rb = require('react-bootstrap');

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
		FeatureStore.addChangeListener(this._onChange.bind(this));
	}

	componentWillUnmount() {
		FeatureStore.removeChangeListener(this._onChange.bind(this));
	}

	render() {
		const PageHeader = rb.PageHeader,
			ListGroup = rb.ListGroup,
			listItems = require('./widgets/ListItems');

		return (
			<div>
				<PageHeader>Features</PageHeader>
				<ListGroup>
					<listItems features={this.state.features}/>
				</ListGroup>
			</div>
		);
	}

	_onChange() {
		this.setState(getFeaturesState());
	}
}

module.exports = Features;