import React from 'react';
 
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'

import Welcome from './components/Welcome'
import Teemo from './components/Teemo'

function App() {
  return (
    <div className="App">

    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path ="/teemo" component = {Teemo} />
    </Switch>
      
      <Link to ="/"> Home </Link>
    </div>
  );
}

export default App;
