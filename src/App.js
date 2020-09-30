import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ProductsList from './ProductsList';
import ProductDetail from './ProductDetail';
import './App.css';

const defaultHistory = createBrowserHistory();

const App = React.forwardRef(({ history = defaultHistory, ...rest }, ref) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <ProductsList {...rest} {...props} ref={ref} />}
        />
        <Route
          exact
          path="/product/:name"
          render={(props) => <ProductDetail {...rest} {...props} ref={ref} />}
        />
      </Switch>
    </BrowserRouter>
  );
});

export default App;
