import React from 'react';
import { Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ProductsList from './ProductsList';
import ProductDetail from './ProductDetail';
import './App.css';

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory, ...rest }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <ProductsList {...rest} {...props} />}
        />
        <Route
          exact
          path="/product/:name"
          render={(props) => <ProductDetail {...rest} {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
