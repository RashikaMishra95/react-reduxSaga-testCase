import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {ConnectedRouter,routerMiddleware} from 'react-router-redux';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import  createHistory from 'history/createBrowserHistory';

import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import  rootSaga from './sagas/index';

const history=createHistory();
const sagaMiddleware=createSagaMiddleware();
const store=createStore(rootReducer,applyMiddleware(sagaMiddleware,routerMiddleware(history)));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
             <App />
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
