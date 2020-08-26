import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }
  
  // This component takes one prop: handleLogin which is a function — this function is called when the form is being submitted. By default, this function currently just includes console.log. That will allow you to see if the form is functioning correctly when working in your browser.

  handleSubmit = evt => {
    evt.preventDefault();
    // Passing in the state object with username and password
    // should not call the `handleLogin` callback prop when the username and/or password fields are empty

    if (this.state.username && this.state.password){
      this.props.handleLogin(this.state) 
    }
  }

  handleInput = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInput}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInput}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
