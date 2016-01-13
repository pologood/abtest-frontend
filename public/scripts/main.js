import Flux from 'Flux';
import assign from 'object-assign';
import EventEmitter from 'events';
import React from 'react';
import ReactDOM from 'react-dom';
import reactMixin from 'react-mixin';
import backbone from 'backbone';
import underscore from 'underscore';
import jQuery from 'jquery';

import app from './app';
import Router from "./config/Router";
import Index from "./views/Index";

import ExperimentCreateStore from "./stores/ExperimentCreate";
import ExperimentStore from "./stores/Experiment";

Index.render();

var container = document.getElementById('page');
ReactDOM.render(<Router />, container);	

