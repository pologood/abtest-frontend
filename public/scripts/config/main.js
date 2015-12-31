'use strict';

System.config({
	baseURL: 'dist/scripts',
	defaultJSExtensions: true,
	format: 'cjs',
	map: {
		'Flux': '/vendor/flux/dist/Flux.js',
		'object-assign': '/vendor/object-assign/index.js',
		'events': '/vendor/eventemitter2/index.js',
		'react': '/vendor/react/react.js',
		'react-dom': '/vendor/react/react-dom.js',
		'react-bootstrap': '/vendor/react-bootstrap/react-bootstrap.js',
		'backbone': '/vendor/backbone/backbone-min.js',
		'underscore': '/vendor/underscore/underscore-min.js',
		'jquery': '/vendor/jquery/dist/jquery.min.js'
	}
});

System.import('app.js');