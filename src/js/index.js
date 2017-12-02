import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap';
import $ from 'jquery';


// Add JS files to bundle
import { Layout } from './components/layout.jsx';

// Add CSS files to bundle
// require('../css/styles.scss');


// Render application to DOM
ReactDOM.render(
    <Layout />,
    document.querySelector('#app')
);