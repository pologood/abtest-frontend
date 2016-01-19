import Flux from 'Flux';
import assign from 'object-assign';
import EventEmitter from 'events';
import React from 'react';
import ReactDOM from 'react-dom';
import reactMixin from 'react-mixin';
import backbone from 'backbone';
import underscore from 'underscore';
import jQuery from 'jquery';
import Modal from 'simple-react-modal';

import ExperimentCreateStore from "./stores/ExperimentCreate";
import ExperimentStore from "./stores/Experiment";

import app from './app';
import Router from "./config/Router";

var container = document.getElementById('app');
ReactDOM.render(<Router />, container);	
