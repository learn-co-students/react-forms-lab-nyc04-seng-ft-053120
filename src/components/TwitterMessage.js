import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '' 
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleMaxCharsChange = (e) => {
    console.log(e.target.value)
  }
  


  render() {
    console.log(this.props.maxChars)
    return (
      <div>
        
        <small><span>characters left: { this.props.maxChars - this.state.message.length}</span></small> <br/>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.message} />
    
      </div>
    );
  }
}

export default TwitterMessage;
