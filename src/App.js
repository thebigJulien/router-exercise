import React from 'react';
import './App.scss';
import Navigation from './header';
import Victoria from './victoria';
import Home from './home';
import { Switch, Route, Router } from 'react-router-dom';
import MelC from './melC';
import MelB from './melB'

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>

      <div className="body">
      <Switch>
        <Route path="/">
        <Home></Home>
        </Route>
      </Switch>

      <Switch>
        <Route path="/victoria">
        <Victoria></Victoria>
        </Route>
      </Switch>

      <Switch>
        <Route path="/melC">
        <MelC></MelC>
        </Route>
      </Switch>

      <Switch>
        <Route path="/melB">
        <MelB></MelB>
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
