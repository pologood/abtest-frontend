import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

import Features from "../views/features/Features";
import FeatureCreate from "../views/features/FeatureCreate";

class Routes extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<Route path="/" component={Features}/>
				<Route path="/features" component={Features}/>
				<Route path="/features/create" component={FeatureCreate}/>
			</Router>
		);
	}
}

module.exports = Routes;