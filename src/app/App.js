/* eslint global-require:off */
import React from 'react';
import {
  HashRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Home from '../home/Home';
import Login from '../login/Login';
import { app } from '../lib/firebase';

export default class App extends React.PureComponent {
  state = {
    authenticated: false,
  }

  auth = app.auth()

  componentWillMount() {
    this.unsubcribeStateChanged = this.auth.onAuthStateChanged((user) => {
      this.setState({ authenticated: Boolean(user) });
    });
  }

  componentWillUnmount() {
    this.unsubcribeStateChanged();
  }

  render() {
    const { authenticated } = this.state;

    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={() => (authenticated ? <Home /> : <Redirect to="/login" />)} />
          <Route path="/login" exact component={() => (!authenticated ? <Login /> : <Redirect to="/" />)} />
        </Switch>
      </HashRouter>
    );
  }
}
