import React, { Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom';

import Posts from './components/Posts';
import Authentication from './components/Authentication';
import UserProfile from './components/UserProfile';


class App extends Component {

  render() {

    return (
      <main className="Application">
        
        <Link to = '/'>
          <h1>Think Piece</h1>
        </Link>
        <Authentication/>
        <Switch>
          <Route exact path ='/' component = { Posts } />

          <Route exact path ='/profile' component = { UserProfile } />
        </Switch>
      </main>
    );
  }
}

export default App;
