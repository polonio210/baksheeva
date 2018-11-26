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
import reducers from './config/reducers/Index';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(middleware, thunk)));
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
store.subscribe(render)
// const render = () => {
//     fancyLog();
//     return ReactDOM.render(<Provider store={store}>
//         <Router history={history}>
//             <div>
//                 <App />
//             </div>
//         </Router>
//     </Provider>,
//         document.getElementById('root'))
// };
// function fancyLog() {
//     console.log("%c NATRIBAKSHEEVA 👉 👉👇", "background: purple; color: #FFF");
// }
// store.subscribe(render);

// render();


//----INITIAL----------------
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './scripts/containers/App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();