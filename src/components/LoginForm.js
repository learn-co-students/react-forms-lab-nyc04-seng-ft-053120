import React from "react";

class LoginForm extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = evt => {
    // console.log(evt.target.name)
    const name = evt.target.name
    this.setState({
      [name]: evt.target.value
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    // console.log("NameInput", evt.target.username.value)
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
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
