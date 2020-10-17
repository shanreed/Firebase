import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

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

  export const firestore = firebase.firestore();// firestore
  export const auth = firebase.auth();//auth
  export const storage = firebase.storage();//storage
  export const provider = new firebase.auth.GoogleAuthProvider();//Provider

  export const signInWithGoogle = () => auth.signInWithPopup(provider);//function that when called the google pop up window shows
  export const signOut = () => auth.signOut();

  // firebase.settings({ timestampsInSnapshots : true })


  window.firebase = firebase;
  



  

  export const createUserProfileDocument = async ( user, additionalData) => {
    if ( !user ) return; //if no user do nothing

    //Get a reference to the place in the database where a user profile might be
    const userRef = firestore.doc(`users/${user.uid}`);

    //Go fetch the document from that location
    const snapshot = await userRef.get();


    //it is exist for query snapshot and exists for document snapshop
    if(!snapshot.exists) {//if snapshot does not exist, then create one
        const { displayName, email, photoURL } = user; //pulling from the user object
        const createdAt = new Date();


      //try to set a document at that user reference if it does not exist
      try {
          await userRef.set({displayName, email, photoURL, createdAt, ...additionalData })
      }catch(err){
        console.error("ERROR CREATING USER", err.meassage)
      }
    }

    return getUserDocument(user.uid);//get it after creations
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;//if no uid
  //otherwise try to get it from the database
  try {
          return firestore.collection('users').doc(uid);
       
  }catch(err) {
  console.error('ERROR FETCHING USER', err.message)
  }
}


  export default firebase;