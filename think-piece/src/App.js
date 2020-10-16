import React, { Component } from 'react';
import { firestore, auth, createUserProfileDocument } from './firebase';
import { collectData} from './utils'


import Posts from './components/Posts';
import Authentication from './components/Authentication';


class App extends Component {

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
