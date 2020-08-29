import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      current: ""
    };
  }

  handleChange = (evt) => {
    this.setState({
      current: evt.target.value
    }, 
    ()=>{console.log(this.state.current)
    })
  }

  handleCount = (total) => {
    console.log(total) 
   if (total >= 0) {
    return total
    }
    else {
      return "You must stop typing"
    }
      
  }



  render() {

    let count = (this.props.maxChars) - (this.state.current.length)

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.current}/>
        <h1>Characters Left: {this.handleCount(count)}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
