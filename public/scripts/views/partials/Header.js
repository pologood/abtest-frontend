const React = require('react'),
	ReactDOM = require('react-dom');

class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const Navigationbar = require('./../widgets/Navigationbar.js');

		return <Navigationbar/>;
	}
}

module.exports = Header;
