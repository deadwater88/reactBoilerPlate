import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Root from './lib/root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './lib/store/store';
import './css/reset.css'


let store = configureStore();
window.store = store
ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
//
