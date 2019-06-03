import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import App from './App';
import History from './History';
import './App.css';

const AppRoute: FC<{}> = () => (
  <div className="container">
    <Switch>
      <Route path="/history" component={History} />
      <Route path="/" component={App} />
      <Redirect to="/" />;
    </Switch>
  </div>
);
export default AppRoute;
