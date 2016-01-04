var reactRenderer = function(component) {
	require("./scripts/views/pages/" + component)
			.then(renderComponent);
};

function renderComponent(ComponentObject) {
	const ReactDOM = require('react-dom'),
		React = require('react');

	validateLoadedComponent(ComponentObject);
	
	var container = document.getElementById('page');
	ReactDOM.render(React.createElement(ComponentObject, null), container);	
}

function validateLoadedComponent (ComponentObject) {
	if (!ComponentObject)
		throw "React component was not found";
}

module.exports = reactRenderer;