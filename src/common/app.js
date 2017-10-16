import React from 'react';
import {Switch, Route} from 'react-router-dom';
import routes from './routes';
import Nav from './components/nav';

const App = () => (
  <main>
    <Nav />
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} {...route} />
      ))}
    </Switch>
  </main>
);

export default App;
