import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';

function Layout() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Layout;
