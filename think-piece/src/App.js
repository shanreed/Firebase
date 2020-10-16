import React, { Component } from 'react';
import { firestore, auth, createUserProfileDocument } from './firebase';
import { collectData} from './utils'


import Posts from './components/Posts';
import Authentication from './components/Authentication';


class App extends Component {
  // componentDidMount = async () => {
  //   //await for the firestore collection
  //   const snapshot = await firestore.collection('post').get()
  //   //go through the snapshot of the database and map them into objects
  //           const posts = snapshot.docs.map(collectData)//function is extracted into the utils.js file
  //           //Set the state
  //           this.setState({posts})
  //                 }

                  // componentDidMount = async () => {
                  //   //await for the firestore collection
                  //   const snapshot = await firestore.collection('post').get()
                  //   //go through the snapshot of the database and map them into objects
                  //           const posts = snapshot.docs.map(doc => { return {id: doc.id, ...doc.data()}})
                  //           //Set the state
                  //           this.setState({posts})
                  //                 }
                



  // componentDidMount = async () => {
  //   //await will wait for the promise to reslove
  //   const snapshot = await firestore.collection('post').get()
  //                 snapshot.forEach(doc => {
  //                   const id = doc.id;
  //                   const data = doc.data();
  //                   console.log({ id, data});
                    
  //                 })
  //                   console.log({snapshot});//returns a query snapshot
  //                 }

//With aysnc and await
  // componentDidMount = async () => {
  //   const snapshot = await firestore//await will wait for the promise to reslove
  //                 .collection('posts')
  //                 .get()
  //                   console.log({snapshot});//returns a query snapshot
  //                 }


//Without aysnc and await
  // componentDidMount = () => {
  //   const posts = firestore
  //                 .collection('posts')
  //                 .get()
  //                 .then(snapshot => {
  //                   console.log({snapshot});//returns a query snapshot
  //                 })
    
  //   console.log({posts})
  
//Add Post to database
  // handleCreate = post => {
  //    firestore.collection('post').add(post);
   
  // };

  // handleRemove = async (id) => {
  //   firestore.doc(`post/${id}`).delete();//removes it from database
  // }

  render() {

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Authentication/>
        <Posts/>
      </main>
    );
  }
}

export default App;
