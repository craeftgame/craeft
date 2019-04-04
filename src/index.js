import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './css/main.scss'

import Craeft from './Craeft';
import About from './About';

let page = window.location.pathname.replace('/', '');
page = page.substr(0, page.indexOf('.'));

let component;

switch (page) {
    case 'about':
        component = <About/>;
        break;

    case 'craeft':
    default:
        component = <Craeft/>;
        break;
}

ReactDOM.render(
    component,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
