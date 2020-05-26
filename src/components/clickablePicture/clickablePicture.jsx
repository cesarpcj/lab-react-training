import React, { Component } from 'react';

class ClickablePicture extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
    };
  }

  changeImg = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  render() {
    return (
      <div>
        <img
          onClick={this.changeImg}
          src={
            (this.state.isClicked && this.props.imgClicked) || this.props.img
          }
          alt=""
        />
      </div>
    );
  }
}

export default ClickablePicture;
