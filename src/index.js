import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import reducer from './reducers';

import './index.css';

/**
 * TODO:
 * 1.- Setup Router
*/

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production')
    middleware.push(createLogger())

const store = createStore(reducer, applyMiddleware(...middleware))

ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

registerServiceWorker();