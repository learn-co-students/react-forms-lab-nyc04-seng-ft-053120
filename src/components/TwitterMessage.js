import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      remainingChars: 280
    };
  }

  handleChange = (event) => {

    this.setState({
      message: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <div>{this.state.remainingChars}</div>
        <input onChange={this.handleChange} type="text" name="message" id="message" max_chars={this.state.maxChars} value={this.state.message} />
      </div>
    );
  }
}

export default TwitterMessage;
