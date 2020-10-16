import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import PostsProvider from './providers/PostsProvider';
import UserProvider from './providers/UserProvider';
 


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </UserProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);


