import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message: "This is a lesson about forms"};
  }
   onChange = (event) =>{
     this.setState({
       message: event.target.value
     })
   }
  render() {
   const charNum = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.onChange} value={this.state.message} />
        {this.props.maxChars}
         {charNum} 
      </div>
    );
  }
}

export default TwitterMessage;
