import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Demands from './Demands';
import DemandAdd from './DemandAdd';
import DemandDetail from './DemandDetail';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Demands}></Route>
      <Route exact path="/demand/add" component={DemandAdd}></Route>
      <Route exact path="/demand/:id" component={DemandDetail}></Route>
    </Switch>
  </main>
);
export default Main;
