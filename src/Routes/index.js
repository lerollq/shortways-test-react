import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Member from "../pages/Members";
import Cities from "../pages/Cities";
import Countries from "../pages/Countries";
import NotFound from "../pages/NotFound";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Member}/>
      <Route exact path="/members" component={Member}/>
      <Route exact path="/cities" component={Cities}/>
      <Route exact path="/countries" component={Countries}/>
      <Route component={NotFound} />
    </Switch>
  )
}