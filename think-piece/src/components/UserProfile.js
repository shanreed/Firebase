import React, { Component } from 'react';
import { firestore, auth, storage } from '../firebase'

class UserProfile extends Component {
      state = {
         displayName: ''
      }
      
      imageInput = null;

      get uid() {
         return auth.currentUser.uid;
      }


      get userRef() {
         return firestore.doc(`users/${this.uid}`)

      }

      get file() {
         //if imageInput is not null then get me the first file
            return this.imageInput && this.imageInput.files[0];
      }

      handleChange = e => {
         const {name, value} = e.target;
         this.setState({[name]: value})
      }

      handleSubmit = e => {
         e.preventDefault();
         const { displayName } = this.state;

         if (displayName) {
            this.userRef.update({displayName});
         }

         if(this.file) {
            storage//uses references
            .ref()//the ref is the top of the storage bucket
            .child('user-profiles')//using child to navigate into the user profiles
            .child(this.uid)//only have access to the folder with the uid
            .child(this.file.name)//name the file
            .put(this.file)//putting the file in the bucket, returns a promise
            .then(res => res.ref.getDownloadURL())//get the full url to where the image is
            .then(photoURL => this.userRef.update({photoURL}))//updating the photoURL
         }
      }



  render() {
     const { displayName } = this.state;
     return (
        <>
        <h1>User Profile</h1>
        <form onSubmit = {this.handleSubmit}>
            <input type = 'text' 
                   name = 'displayName' 
                   value = {displayName} 
                   placeholder = 'Display Name'
                   onChange = {this.handleChange}/>
            
            <input type = "file" ref ={ref => this.imageInput = ref} />
            <input className = 'update' type = 'submit' />
        </form>
        </>
     )
  }
}
export default UserProfile;