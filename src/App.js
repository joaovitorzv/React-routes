import React from 'react';
import './App.css';

import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetails from './ItemDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about"component={About} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop/:id" component={ItemDetails} />
        </Switch>
      </div>
    </Router>
  );
}


const Home = () => (
  <div>
     <h1>Home page</h1>
  </div>
);

export default App;
