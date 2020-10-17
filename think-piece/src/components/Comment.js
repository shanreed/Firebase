import React from 'react';

import moment from 'moment';

const Comment = ({ content, user, createdAt }) => {
  return (
    <article className="Comment">
      <span className="Comment--author">{user.displayName}</span>
      <span className="Comment--content">{content}</span>
      <span className="Comment--timestamp">{moment(createdAt).calendar()}</span>
    </article>
  );
};

Comment.defaultProps = {
  title: 'An Incredibly Hot Take',
  content:
    'I love to code',
  user: {
    displayName: 'Rita lacey',
    email: 'ritalacey@mailinator.com',
    photoURL: 'https://www.ritalacey.com/300/300',
  },
  createdAt: new Date(),
};

export default Comment;
