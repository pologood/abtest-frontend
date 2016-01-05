import Flux from 'Flux';
import assign from 'object-assign';
import EventEmitter from 'events';
import React from 'react';
import ReactDOM from 'react-dom';
import rb from 'react-bootstrap';
import backbone from 'backbone';
import underscore from 'underscore';
import jQuery from 'jquery';

import app from './app.js';
import Index from "./views/Index.js";
import Router from "./config/Router";

Index.render();

var container = document.getElementById('page');
ReactDOM.render(<Router />, container);	

