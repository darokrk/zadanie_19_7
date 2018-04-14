import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import DevTools from './DevTools';
import { createLogger } from 'redux-logger';
import reducer from './reducers/reducer.js';
import { addComment } from './actions/actions.js';

const logger = createLogger();
const store = createStore(
    reducer,
    DevTools.instrument(),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));