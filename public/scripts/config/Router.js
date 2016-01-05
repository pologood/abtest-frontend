import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

import Features from "../views/features/Features";

class Routes extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router history={createHistory()}>
				<Route path="/" component={Features}/>
				<Route path="/features" component={Features}/>
			</Router>
		);
	}
}

module.exports = Routes;