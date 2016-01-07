import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<nav className="navbar navbar-default">
				<div className="navbar-header">
						<a className="navbar-brand" href="#">ABTest</a>
				</div>
				<div className="nav navbar-nav">
					<li><a eventKey={1} href="#/experiments">Experimentos</a></li>
			
				</div>
			</nav>
		);
		return <Navigationbar/>;
	}
}

module.exports = Header;
