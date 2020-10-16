import React, { Component, createContext } from 'react';
import { firestore } from '../firebase';
import { collectData } from '../utils';

export const PostsContext = createContext();



class PostsProvider extends Component {
    state = {
        posts: []
      };
    
      unsubscribeFromFirestore = null;
    
    
      componentDidMount = () => {
        this.unsubscribeFromFirestore = firestore.collection('post').onSnapshot(snapShot => {
          const posts = snapShot.docs.map(collectData);
          this.setState({posts})
        })}


        componentWillUnmount = () => {
            this.unsubscribeFromFirestore();
          }


  render() {
    const { posts } = this.state;
    const { children } = this.props;
     return (
        <PostsContext.Provider value = {posts}>
          { children }
          </PostsContext.Provider>
     )
  }
}
export default PostsProvider;