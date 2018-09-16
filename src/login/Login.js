const React = require('react');
const { connect } = require('react-redux');
const { app, firebase } = require('../lib/firebase');

class Login extends React.Component {
  state = {
    verified: false,
    confirmationResult: null,
    /** @type {import('firebase').User} */
    user: null,
  }

  constructor(props) {
    super(props);

    this.auth = firebase.auth();
    this.auth.languageCode = 'es';
    this.auth.settings.appVerificationDisabledForTesting = true;
    this.providerGoogle = new firebase.auth.GoogleAuthProvider();
  }

  componentWillMount() {
    this.unsubscribeChangeAuth = this.auth.onAuthStateChanged(this.handleChangeUser);
  }

  async componentDidMount() {
    console.log(
      { currentUser: this.auth.currentUser },
    );

    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('btn-login', {
      size: 'invisible',
      callback: () => {
        this.setState(state => Object.assign({}, state, { verified: true }));
      },
      'expired-callback': () => {
        this.setState(state => Object.assign({}, state, { verified: false }));
      },
    });

    await this.recaptchaVerifier.render();
    this.recaptchaVerifier.verify();
  }

  componentWillUnmount() {
    this.unsubscribeChangeAuth();
  }

  /**
   * @param {import('firebase/app').User} user
   */
  handleChangeUser = (user) => {
    this.setState({ user });
  }

  handleLogin = async () => {
    const confirmationResult = await this.auth.signInWithPhoneNumber(this.inputPhone.value, this.recaptchaVerifier);
    this.confirmationResult = confirmationResult;
    this.setState(state => Object.assign({}, state, { confirmationResult }));
    console.log({ currentUser: this.auth.currentUser });
  }

  handleSignInGoogle = async () => {
    await this.auth.signInWithRedirect(this.providerGoogle);
  }

  handleSignOut = async () => {
    await this.auth.signOut();
  }

  async handleEndLogin(verificationCode) {
    await this.confirmationResult.confirm(verificationCode);
  }

  render() {
    const { verified, confirmationResult, user } = this.state;

    if (user) {
      return (
        <div>
          <pre>{JSON.stringify(user.toJSON(), null, 4)}</pre>
          <button type="button" onClick={this.handleSignOut}>SignOut</button>
        </div>
      );
    }

    if (verified) {
      if (confirmationResult) {
        return (
          <div>
            <input ref={(elm) => { this.inputVerification = elm; }} type="number" name="verification" />
            <button type="button" onClick={() => this.handleEndLogin(this.inputVerification.value)}>
              Ingresar
            </button>
          </div>
        );
      }

      return (
        <div>
          <input ref={(elm) => { this.inputPhone = elm; }} type="phone" name="phone" />
          <button type="button" onClick={this.handleLogin}>Ingresar telefono</button>
          <button type="button" onClick={this.handleSignInGoogle}>Ingresar con Google</button>
        </div>
      );
    }

    return (
      <div>
        <input id="btn-login" ref={(elm) => { this.btnSignIn = elm; }} type="hidden" onClick={this.handleLogin} />
        <div>Cargando...</div>
      </div>
    );
  }
}

module.exports = connect()(Login);
