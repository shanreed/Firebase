import React, { Component } from 'react';
import { firestore, auth } from '../firebase'

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