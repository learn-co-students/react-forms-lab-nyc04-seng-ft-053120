import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: ""
  }

  handleMessageChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  remainingChars = () => {
    return this.props.maxChars - this.state.message.length
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleMessageChange} />
        <p>Remaining Characters: {this.remainingChars()} </p>
      </div>
    );
  }
}

export default TwitterMessage;
