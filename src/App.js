import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Product from './components/Product';
import Cart from './components/Cart/Cart';

function App() {
  return (

      <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/product/:id" exact>
          <Product/> 
        </Route>
        <Route path="/cart" exact >
        <Cart/>
        </Route>
      </Switch>
      </Router>

  );
}

export default App;
