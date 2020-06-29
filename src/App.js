import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Hooks from './pages/Hooks';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/hooks' component={Hooks} />
        <Route path='/product/:productName' component={ProductDetail} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
