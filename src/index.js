/* global document */
const React = require('react');
const ReactDOM = require('react-dom');
// const { Provider } = require('react-redux');
// const redux = require('redux');
const App = require('./app/App');

// const store = redux.createStore(require('./reducer'), {});

ReactDOM.render(<App />, document.querySelector('#app'));
