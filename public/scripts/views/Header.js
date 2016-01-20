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
					<img src="/images/abtest-horizontal.svg" onClick={this._openExperiments.bind(this)}
							className="navbar-brand"/>
				</div>
				<div className="nav navbar-nav">
					<li><a href="#" onClick={this._openExperiments.bind(this)}>Experimentos</a></li>
				</div>
			</nav>
		);
	}

	_openExperiments() {
		this.history.pushState(null, '/experiments');
	}
}

reactMixin.onClass(Header, History);

module.exports = Header;
