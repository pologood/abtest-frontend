import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

//var createBrowserHistory = require('history/lib/createBrowserHistory');

var compontentsRoute = './scripts/views/pages/';
import Features from "../views/pages/features/Features";
//var FeaturesCreate = require("scripts/views/pages/features/Create.jsx")

// <Route path="*" component={NotFound}/>
// <Route path="/features/create" component={FeaturesCreate}/>

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