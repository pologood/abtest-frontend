import Index from "./views/Index.jsx";
import Router from "./config/routes/Router";
var React = require('react');
var ReactDOM = require('react-dom');

Index.render();

var container = document.getElementById('page');
ReactDOM.render(<Router />, container);	

class App {
	constructor() {
	}
}

module.exports = new App();
