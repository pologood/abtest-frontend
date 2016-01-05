'use strict';

var Index = function () {
	var indexObj = {
		render: function() {
			var React = require('react');
			var ReactDOM = require('react-dom');
			var Header = require('./partials/Header.js');

			var container = document.getElementById('header');

			ReactDOM.render(<Header></Header>, container);			
		}	
	}
	return indexObj;
}();

module.exports = Index;