import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

import Experiences from "../views/experiences/Experiences";
import ExperienceCreate from "../views/experiences/ExperienceCreate";

class Routes extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<Route path="/" component={Experiences}/>
				<Route path="/experiences" component={Experiences}/>
				<Route path="/experiences/create" component={ExperienceCreate}/>
			</Router>
		);
	}
}

module.exports = Routes;