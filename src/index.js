import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import { Provider } from 'react-redux';
import store from 'redux-store/store.js';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)