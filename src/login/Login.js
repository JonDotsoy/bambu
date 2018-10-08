import React from 'react';
import DatePicker from 'antd/lib/date-picker';
import { app, firebase } from '../lib/firebase';

import './Login.css';

export default class Login extends React.Component {
  state = {
    verified: false,
    confirmationResult: null,
    /** @type {import('firebase').User} */
    user: null,
  }

  constructor(props) {
    super(props);

    this.auth = app.auth();
    this.auth.languageCode = 'es';
    this.auth.settings.appVerificationDisabledForTesting = true;
    this.providerGoogle = new firebase.auth.GoogleAuthProvider();
  }

  render() {
    console.log('Render it');
    return (
      <div>
        <DatePicker />
      </div>
    );
  }
}
