import React from 'react';
import ReactDOM from 'react-dom';
import { History } from 'react-router';
import reactMixin from 'react-mixin';

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
					<li><a onClick={this._openExperiments.bind(this)}>Experimentos</a></li>
				</div>
			</nav>
		);
		return <Navigationbar/>;
	}

	_openExperiments() {
		this.history.pushState(null, '/experiments');
	}
}

reactMixin.onClass(Header, History);

module.exports = Header;
