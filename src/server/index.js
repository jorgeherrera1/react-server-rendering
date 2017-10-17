import path from 'path';
import Express from 'express';
import favicon from 'serve-favicon';
import logger from 'morgan';
import React from 'react';
import {Provider} from 'react-redux';
import {renderToString} from 'react-dom/server';
import {StaticRouter, matchPath} from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import api from './api';
import configureStore from '../common/store/configure-store';
import App from '../common/app';
import routes from '../common/routes';

const app = new Express();
const port = process.env.PORT || 9000;

app.use(logger('short'));
app.use(favicon('favicon.ico'));
app.use(Express.static('public'));
app.use('/api', api);

const handleRender = (req, res) => {
  const currentRoute = routes.find((route) => (matchPath(req.url, route)));
  const fetchData = currentRoute.component.fetchData && currentRoute.component.fetchData();
  
  Promise.resolve(fetchData)
    .then((initialData) => {
      const store = configureStore(initialData);
      const context = {};

      const html = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      );

      const preloadedState = store.getState();
      console.log('Preloaded State from Server: ', preloadedState);
    
      res.send(renderFullPage(html, preloadedState));
    })
    .catch((error) => {
      console.log(error);
    });
};

const renderFullPage = (html, preloadedState) => {
  return `
  <!doctype html>
  <html>
    <head>
      <title>React Server Rendering</title>
    </head>
    <body>
      <div id="app">${html}</div>
      <script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)};</script>
      <script src="/app.bundle.js"></script>
    </body>
  </html>
  `
};

app.use(handleRender);

app.listen(port, () => {
  console.info('App is running!');
});
