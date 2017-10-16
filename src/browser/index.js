import React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from '../common/store/configure-store';
import App from '../common/app';

const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
