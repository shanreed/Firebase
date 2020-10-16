import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import PostsProvider from './providers/PostsProvider'; 


ReactDOM.render(
  <React.StrictMode>
    <PostsProvider>
      <App />
    </PostsProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);


