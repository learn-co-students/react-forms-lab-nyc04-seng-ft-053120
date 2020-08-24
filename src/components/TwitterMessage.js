import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  remainingChars = () => {
    return this.props.maxChars - this.state.message.length
  }

  render() {
    console.log(this.state.message);
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          onChange={this.handleInputChange} 
          value={this.state.message} />
        <p>Characters Remaining: {this.remainingChars()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
