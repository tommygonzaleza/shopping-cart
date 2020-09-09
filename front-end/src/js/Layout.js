import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import ProductsView from './views/ProductsView';
import ProdutDetailsView from './views/ProductDetailsView';

function Layout() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/products" component={ProductsView} />
          <Route path="/product-details/:id" component={ProdutDetailsView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Layout;
