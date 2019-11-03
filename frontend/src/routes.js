import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Stats from './Pages/Stats';

const Routes = () => (
  <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/stats/:playerid' exact component={Stats} />
      </Switch>
  </BrowserRouter>
)

export default Routes