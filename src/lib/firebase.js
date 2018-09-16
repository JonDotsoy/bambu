
const firebase = require('firebase/app');
require('firebase/auth');

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCLow5pDsfiSJ-HYdq0FsgcMLw94llKN4Q',
  authDomain: 'bambu-2e477.firebaseapp.com',
  databaseURL: 'https://bambu-2e477.firebaseio.com',
  projectId: 'bambu-2e477',
  storageBucket: 'bambu-2e477.appspot.com',
  messagingSenderId: '460548241022',
};

// firebase.auth().settings.appVerificationDisabledForTesting = true;

module.exports.firebase = firebase;
module.exports.app = firebase.initializeApp(config);

global.firebaseExp = module.exports;
