import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';

import Index from "../views/Index";
import NotFound from "../views/NotFound";
import Experiments from "../views/experiments/Experiments";
import ExperimentCreate from "../views/experiments/ExperimentCreate";

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
					<Route path="/experiments/create" component={ExperimentCreate}/>
					<Route path="/experiments/create/:id" component={ExperimentCreate}/>
					<Route path="*" component={NotFound}/>
				</Route>
			</Router>
		);
	}
}

module.exports = Routes;