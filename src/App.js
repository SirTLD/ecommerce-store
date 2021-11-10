import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductLists from './pages/ProductLists';
import Register from './pages/Register';
import SingleProduct from './pages/SingleProduct';

function App() {
  const user = true;
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:category">
            <ProductLists />
          </Route>
          <Route path="/product/:id">
            <SingleProduct />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
