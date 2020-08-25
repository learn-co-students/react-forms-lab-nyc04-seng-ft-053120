import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: "",
      // startingChars: props.maxChars
    };
  }

  countChars = (event) => {
    this.setState({
      value: event.target.value,
      // startingChars: prevState.startingChars - this.state.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.countChars} value={this.state.value} type="text" name="message" id="message" />
        <p>{this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
