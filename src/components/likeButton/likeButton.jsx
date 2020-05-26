import React, { Component } from 'react';

class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
    };
  }

  increment = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.likes}</p>
        <button onClick={this.increment}>like</button>
      </div>
    );
  }
}

export default LikeButton;
