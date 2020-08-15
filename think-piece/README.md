This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- React Router 
- React Router DOM
- Redux
- Moment


#Firebase
- `npm install --save firebase`
- `npm install -g firebase-tools`
- ` npm install --save firebase-admin`

#Create firbase.js
- configure firebase

            import firebase from 'firebase/app';

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

            window.firebase = firebase;
            export default firebase;


# Turn on Database

