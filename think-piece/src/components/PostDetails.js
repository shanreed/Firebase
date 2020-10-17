import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Post from './Post';
import Comments from './Comments'

import { firestore } from '../firebase';
import { collectData } from '../utils';
import withUser from './withUser';


class PostDetails extends Component {
    state = {
        post: null,
        comments: []
    };

    get postId() {
        return this.props.match.params.id
    }

    get postRef() {
        return firestore.doc(`post/${this.postId}`)
    }

    get commentsRef() {
        return this.postRef.collection('comments');
    }

    unsubscribeFromPost = null;
    unsubscribeFromComments = null;
    
    componentDidMount = async () => {
        this.unsubscribeFromPost = this.postRef.onSnapshot(snapshot => {
            const post = collectData(snapshot);
            this.setState({ post })
        })

        this.unsubscribeFromComments = this.commentsRef.onSnapshot(snapshot => {
            const comments = snapshot.docs.map(collectData);
            this.setState({ comments })
        })
    }

    componentWillUnmount = () => {
        this.unsubscribeFromPost();
        this.unsubscribeFromComments();
    }

    createComment = (comment) => {
        const { user } = this.props
        console.log(comment)
        this.commentsRef.add({
            ...comment,
            user,
        })
    }



    render() {
        const { post, comments } = this.state;
        console.log(this.props);
        return (
            <>
            <h1>Post Page</h1>
            <section>
                {/* if you have the post show me a post */}
                { post && <Post {...post}/> }
                <Comments
                    comments = { comments }
                    // postId = {post.id}
                    onCreate = {this.createComment}
                />
            </section>
            </>
        )
    }
}
export default withRouter(withUser(PostDetails));