import React from 'react';

import './App.css';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom'

import Welcome from './components/Welcome'
import Champ from './components/Champ'
import moreInfo from './components/moreInfo'
import Regions from './components/Regions' 
import RegionInfo from './components/RegionInfo'
import Footer from './components/Footer'

function App() {
  return (
    <div className = "App" >

    <Switch>
      <Route
        exact path="/"
        component = { Welcome } />
    <Route
          exact path="/champions/:name"
          render={(props) => <Champ {...props} />} 
          />
    <Route 
          path="/champions/:name/moreInfo"
          component={moreInfo} /> 
    <Route 
      exact path="/regions"
          component={Regions} /> 
        <Route path="/regions/:name"
          component ={RegionInfo} />
    
        
        
        
    </Switch>
    <Footer /> 
    </div>
  );
}

export default App;