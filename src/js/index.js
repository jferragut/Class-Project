import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv'

import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap';
import $ from 'jquery';



// Add JS files to bundle
import { Layout } from './Views/layout.jsx';
var Highcharts = require('highcharts/highstock');

// Add CSS files to bundle
require('../css/styles.scss');
require("font-awesome-webpack");

// Render application to DOM
ReactDOM.render(
    <Layout />,
    document.querySelector('#app')
);

