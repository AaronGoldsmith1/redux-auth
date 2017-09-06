import React, { Component } from 'react';

export default class CommentBox extends Component {
  render() {
    return (
      <div>
        <textarea className="comment-box"/>
        <button>Submit Comment</button>
      </div>
    )
  }
}
