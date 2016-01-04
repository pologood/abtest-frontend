var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router  = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
//var createBrowserHistory = require('history/lib/createBrowserHistory');

var compontentsRoute = './scripts/views/pages/';
var Features = require("scripts/views/pages/features/Features.js")
//var FeaturesCreate = require("scripts/views/pages/features/Create.jsx")

// <Route path="*" component={NotFound}/>

var routes = (
  <Router>
    <Route path="/" component={Features}/>
    <Route path="/features" component={Features}/>
    <Route path="/features/create" component={FeaturesCreate}/>
  </Router>
)

module.exports = routes;