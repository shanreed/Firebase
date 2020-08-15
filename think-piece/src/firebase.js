import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyCpOkN7yVjdW_1dJKf8tCH2TyYQJV3iJiY",
    authDomain: "think-piece-live-d8309.firebaseapp.com",
    databaseURL: "https://think-piece-live-d8309.firebaseio.com",
    projectId: "think-piece-live-d8309",
    storageBucket: "think-piece-live-d8309.appspot.com",
    messagingSenderId: "486387723771",
    appId: "1:486387723771:web:7f001b110f1c43dff56f5e",
    measurementId: "G-SRR17KXP9G"
  };

  firebase.initializeApp(config);

  export const firestore = firebase.firestore();

  window.firebase = firebase;

  export default firebase;