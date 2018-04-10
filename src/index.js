import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(rootReducer)}>    
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
