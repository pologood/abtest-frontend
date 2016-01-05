import React from 'react';
import ReactDOM from 'react-dom';
import Index from "./views/Index.js";
import Router from "./config/Router";

Index.render();

var container = document.getElementById('page');
ReactDOM.render(<Router />, container);	

class App {
	constructor() {}
}

module.exports = new App();
