import React from 'react';
import ReactDOM from 'react-dom';

// Add JS files to bundle
import { App } from './components/app';
// Add CSS files to bundle
require('../css/styles.scss');

// Render application to DOM
ReactDOM.render(
    <App />,
    document.getElementById('app')
);