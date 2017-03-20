import React, { Component } from 'react';

class PostsIndex extends Component {
  componentWillMount() {
    console.log('this would be a great time to call an action creator to fetch posts');
  }

  render() {
    return (
      <div>List of blog Posts</div>
    );
  }
}

export default PostsIndex;
