# Firebase
- configuration in firebase general ascroll down to app and pick configuration


- [x] Create project on Firebase website
- [x] Configure firebase in your app
    - [x] Create firebase.js file and add configuration from your firebase project
- [x] Turn on Datbase
    - [x] click the database tab and then click create database
    - [x] start a collection
- [x] Connect to database
    - [x] import firebase/firestore `import 'firebase/firestore';`
    - [x] import firestore from firebase `import { firestore } from './firebase';`
- [x] Get from database
    - [x] add the get request (componentDidMount)
- [x] Add to database
    [ ]
- [x] Delete from database
- [x] Update Ui with database so we wont have to keep fetching the data
- [x] Adding Stars
- [x] Converting Javascript Date object


#Authentication
- Authentication tab
- FB, Twitter, and Github requires a api key
- Firebase is owned by google so you do not need a api key
- email and password does not require a api key


###Google Part 1
- [x] Configure OAuth
    - click google and enable it give your email address and click save Done!!!
    - same for email and password, click email and password click save Done!!!
    - will implement sign in with google

#####Authenticate UI
- [ ] presist user info across application
    - add user to state with a value of null
    - user is null so you should see the signup and sign in forms

- [ ] Detect whenever the auth state changes then update the application state base on it
- [ ] Implement SignOut

####Security Rules
- [ ] Authenticate users
- [ ] Validate what the user can and cannot do

##### Other
- [ ] moment
    - `npm install moment`
-------

UI Permissions

#### Context API
**The code for hooking up to firebase and passing it down to components can be extracted out and passed to only the components that need it using the context api that comes with react**
- [ ] 



## Document Routing
- letting the route inform which one to go get