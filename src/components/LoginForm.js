import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username: "", password: ""};
  }

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
   onSubmithandle = (event) => {
    event.preventDefault();
     if (this.state.username && this.state.password) {
       this.props.handleLogin(event, this.state.username, this.state.password)
     }

    
   }

  render() {
    
    
    return (
      <form onSubmit={ this.onSubmithandle } >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange = {this.onChangeUsername} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange = {this.onChangePassword} />
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
