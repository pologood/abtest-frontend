import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import Index from "../views/Index";
import NotFound from "../views/NotFound";
import Experiments from "../views/experiments/Experiments";
import ExperimentForm from "../views/experiments/ExperimentForm";

class Routes extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router history={createHistory()}>
				<Route path="/" component={Index}>
					<IndexRoute component={Experiments}/>
					<Route path="/experiments" component={Experiments}/>
					<Route path="/experiments/form" component={ExperimentForm}/>
					<Route path="/experiments/form/:id" component={ExperimentForm}/>
					<Route path="*" component={NotFound}/>
				</Route>
			</Router>
		);
	}
}

module.exports = Routes;