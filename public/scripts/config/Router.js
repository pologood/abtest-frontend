import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

import Experiments from "../views/experiments/Experiments";
import ExperimentCreate from "../views/experiments/ExperimentCreate";

class Routes extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<Route path="/" component={Experiments}/>
				<Route path="/experiments" component={Experiments}/>
				<Route path="/experiments/create" component={ExperimentCreate}/>
			</Router>
		);
	}
}

module.exports = Routes;