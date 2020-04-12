import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { App } from './App';

import { initAmplify } from './config/amplify';

import { StateProvider } from './state/store';

import './index.css';

initAmplify();

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <StateProvider>
                <App />
            </StateProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
