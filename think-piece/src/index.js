import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import PostsProvider from './providers/PostsProvider';
import UserProvider from './providers/UserProvider';
import { BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
  <Router>
  <React.StrictMode>
    <UserProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </UserProvider>
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);


