const React = require('react');
const firebase = require('../lib/firebase');

global.firebase = firebase;

module.exports = () => (
  <div>Hola home</div>
);
