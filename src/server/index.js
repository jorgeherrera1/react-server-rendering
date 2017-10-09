import Express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../common/app';

const app = new Express();
const port = process.env.PORT || 9000;

app.use(Express.static('public'));

const handleRender = (req, res) => {
  const html = renderToString(<App />);

  res.send(renderFullPage(html));
};

const renderFullPage = (html) => {
  return `
  <!doctype html>
  <html>
    <head>
      <title>React Server Rendering</title>
    </head>
    <body>
      <div id="app">${html}</div>
      <script src="/app.bundle.js"></script>
    </body>
  </html>
  `
};

app.use(handleRender);

app.listen(port, () => {
  console.info('App is running!');
});
