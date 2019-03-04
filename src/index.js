import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/rootReducer'
import reduxPromise from 'redux-promise'
const middleware = applyMiddleware(reduxPromise)
const theStore1 = middleware(createStore)
const theStore = theStore1(reducers)

ReactDOM.render(
    <Provider store={theStore}>
        <App />
    </Provider>,
    document.getElementById('root'));


