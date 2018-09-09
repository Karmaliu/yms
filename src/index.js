import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import RouterConfig from './router';
import { Provider } from 'react-redux';
import { store } from './store';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
    <Provider store={store}>
        <RouterConfig />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
