import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    // This component takes one prop: maxChars which is a number — the maximum amount of characters a message can have. This prop is being passed in from the App component with the value 280.

    this.state = {
      message: ''
    };
  }

  handleMessageInput = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  render() {
    const numChars = this.props.maxChars - this.state.message.length
    return (
      <div>
        {/* You'll find an <input type="text"> in this component. Make this a controlled component by adding the attributes to the <input> element. Its value should be saved in the component's state and should update on every change to the input. */}
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={ this.state.message } onChange={ this.handleMessageInput }/>

        {/* Show the remaining characters in the component. It doesn't matter how you render it, as long as the number is correct. No need to guard against input that is too long — you can let the counter reach negative values. */}

        <div>You have {numChars} characters remaining</div>
      </div>
    );
  }
}

export default TwitterMessage;
