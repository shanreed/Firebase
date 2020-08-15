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
The firebase store returns two major objects
- *Query Snapshot*
- *Document Snapshot*

##Snapshots
- are objects that represent the data
- its the real time database 
- when data is requested we will get back a snapshot
- **Query Snapshot** - collection of things
- **Document Snapshot** - document 

###Query Snapshots Properties

| Property        | Holds         
| ------------- |:-------------:|
| docs     | all documents in snapshot |
| empty     | boolean that lets you know if the snapshot was empty      |
| metadata| metadata concernong its source and if it has local modifications      |
|query| a reference to the query that was fired|
|size| number of documents in the Query Snapshot

###Query Snapshots Methods

| Method        | Holds         
| ------------- |:-------------:|
| docChanges()     | array of changes since last snapshot |
| forEach()    | iterates over the entire array of snapshots      |
| isEqual()| lets you know if it matches another snapshot      |

**Query snapshots typically hold onto a number of Query Document Snapshots, which inherit from Document Snapshots**
###Documnet Snapshots Properties

| Method        | Holds         
| ------------- |:-------------:|
| id     | the id of the given document |
| exists   | is this in the datatbase      |
| metadata| metadata concernong its source and if it has local modifications      |
|ref | reference to the documents location in the database


###Documents Snapshots Methods

| Method        | Holds         
| ------------- |:-------------:|
| data()     | array of changes since last snapshot|
| get()    | allows you to access a particular property on the object|
| isEqual()| for comparisons|