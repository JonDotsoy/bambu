/* eslint global-require:off */
const React = require('react');
const PropTypes = require('prop-types');
const {
  HashRouter, Switch, Route, Redirect,
} = require('react-router-dom');
// const { connect } = require('react-redux');

const App = ({ logged }) => {
  if (logged === false) {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={require('../login/Login')} />
          <Route exact path="/" render={() => <Redirect to="/login" />} />
        </Switch>
      </HashRouter>
    );
  }

  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={require('../home/Home')} />
        <Route path="/login" exact render={() => <Redirect to="/" />} />
      </Switch>
    </HashRouter>
  );
};

App.propTypes = {
  logged: PropTypes.bool.isRequired,
};

App.propDefault = {
  logged: false,
};

module.exports = App;
