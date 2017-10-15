import path from 'path';
import Express from 'express';
import favicon from 'serve-favicon';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter, matchPath} from 'react-router-dom';
import 'isomorphic-fetch';
import App from '../common/app';
import routes from '../common/routes';

const app = new Express();
const port = process.env.PORT || 9000;

app.use(favicon('favicon.ico'));
app.use(Express.static('public'));

app.get('/api/dashboard', (req, res) => {
  res.json({
    numberOfResources: 15
  })
});

app.get('/api/skills', (req, res) => {
  res.json({
    skills: ['Oracle PLSQL', 'JavaScript']
  });
});

const handleRender = (req, res) => {
  console.log(`Request URL is: ${req.url}`);
  const currentRoute = routes.find((route) => (matchPath(req.url, route)));
  const initialData = currentRoute.component.fetchData()
    .then((initialData) => {
      const context = {initialData};
      console.log(context);
      const html = renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      );
    
      res.send(renderFullPage(html, initialData));
    })
    .catch((error) => {
      console.log(error);
    });
};

const renderFullPage = (html, initialData) => {
  return `
  <!doctype html>
  <html>
    <head>
      <title>React Server Rendering</title>
    </head>
    <body>
      <div id="app">${html}</div>
      <script>window.__INITIAL_DATA__ = ${JSON.stringify(initialData)};</script>
      <script src="/app.bundle.js"></script>
    </body>
  </html>
  `
};

app.use(handleRender);

app.listen(port, () => {
  console.info('App is running!');
});
