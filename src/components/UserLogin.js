import React, { Component } from "react";
import LockIcon from './Icons/lockIcon';
import UserLoginIcon from './Icons/userLoginIcon';

class UserLogin extends Component {
  state = {
    username: null,
    password: null
  };

  render() {
    return (
      <form className="login-form mt-4">
        <div className="form-group">
          <span className="form-inline">
            <UserLoginIcon />
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="username"
            />
          </span>
          <span className="form-inline">
            <LockIcon />
            <input
              type="text"
              className="form-control"
              id="password"
              placeholder="password"
            >
            </input>
          </span>
        </div>
      </form>
    );
  }
}

export default UserLogin;