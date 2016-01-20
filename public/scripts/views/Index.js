var React = require('react');
var ReactDOM = require('react-dom');

class Index extends React.Component {

	constructor(props) {
		super(props);
	}

	render () {
		var Header = require('./Header');
		return (
			<div>
				<Header/>
				<div id="page">
					{this.props.children}
				</div>
				<div className="navbar navbar-bottom footer">
				</div>
			</div>
		);
	}
};

module.exports = Index;