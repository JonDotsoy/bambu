import React from 'react';
import { app } from '../lib/firebase';

console.log(app.auth());

export default class Logged extends React.Component {
  state = {
    user: null,
  }

  constructor(props) {
    super(props);
    this.auth = app.auth();
  }

  componentWillMount() {
    this.auth.onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  render() {
    return (
      <div />
    );
  }
}
