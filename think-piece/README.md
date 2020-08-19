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
- `npm install --save firebase-admin`

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



####Security Rules
- are all or nothing
- you can limit the size of a query so that malicious users(or you after a big lunch) cant run exspensive queries
- allow list if request.query.limit <= 10;
- we define what a given user is allowed to do and firebase does all the rest for us
- cloud firestore rules always follow this structure 

            service cloud.firestore {
                //match /database/{database}/documents {
                    //...
                }
            }

- { database }  will always be the default database
- by default everything is blacklisted, you turn on certain abilities
- we can whitelist actions
- if you turn on read
    - get
    - list
- if you turn on write
    - create
    - update
    - delete


####Nest Rules to sub-collections
- if you want to match all the way down `{document=**}` will go the rest of the way down with the rules
- if multiple rules match then the operation is allowed if any of them are true

                service cloud.firestore {
                                //match /database/{database}/documents {
                                    match/posts/{postId} {
                                        match/comments/{comment} {
                                            allow read, write: if condition;
                                        }
                                    }
                                }
                            }

[Example-1: A user can read or write to any post, only if the req auth id is not null](example1.jpg)
[Example-2: Modify your own data](example2.jpg)

###Validating Based on the Document
- All you have when responding to a document creation is `resource.data` and `request.resource.data`
- `resource.data` will have the fields on the document as it is stored in the database, all fields currently in the database
- `request.resource.data` will have the incoming document, incoming or changed fields

###Accessing Other documents
- `exists(/database/$(database)/documents/users/$(request.auth.uid))` will verify that a document exists.
- get`(/database/$(database)/document/users/$(request.auth.uid)).data` will get you the data of another document


- This is what we have by default, allows whoever and whatever to read and write

        service cloud.firestore {
                        //match /databases/{database}/documents {
                            match/{document=**} {
                                allow, read write
                            }
                        }
                    }