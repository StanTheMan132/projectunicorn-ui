import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import './css/nav.scss';
import './css/landing.css';
import './css/login.css';
import './css/forms.css';
import './css/secondaryNavbar.scss';
import './css/projects.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
