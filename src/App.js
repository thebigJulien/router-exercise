import React from 'react';
import './App.scss';
import Navigation from './header';
import Victoria from './victoria';
import Home from './home';
import { Switch, Route, Router } from 'react-router-dom';
import MelC from './melC';
import MelB from './melB';
import Geri from './Geri';
import Emma from './Emma';

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
        <Route path="/victoria" component={Victoria} />
        <Route path="/melC" component={MelC} />
        <Route path="/melB" component={MelB} />
        <Route path="/geri" component={Geri} />
        <Route path="/Emma" component={Emma} />
      </Switch>

      </div>
    </div>
  );
}

export default App;
