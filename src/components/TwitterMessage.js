import React from "react";

class TwitterMessage extends React.Component {

  state = {
    inputValue: ""
  }

  handleChange = (e) => {
    this.setState(prevState => ({inputValue: e.target.value}))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.inputValue}/>
        <span>{this.props.maxChars - this.state.inputValue.length} characters left.</span>
      </div>
    );
  }
}

export default TwitterMessage;
