import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import './index.css';

import { ConnectedRouter as Router, routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from "redux-thunk";
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const middleware = routerMiddleware(history);

import App from "./scripts/containers/App";
import rootReducer from './config/reducers/Index';

import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/Firebase/fbConfig';

const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(middleware, thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig)
    )
);
export default store;

const render = () => ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <App />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

render();
store.subscribe(render);