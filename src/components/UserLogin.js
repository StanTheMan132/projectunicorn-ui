import React, { Component } from "react";
import LockIcon from "./Icons/lockIcon";
import UserLoginIcon from "./Icons/userLoginIcon";

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
            <input
              type="text"
              className="form-control form-input"
              placeholder="username"
            />
            <UserLoginIcon className="user-login-icon" />
            <span className="floating-label" disabled>
              Username
            </span>
          </span>
          <span className="form-inline">
            <input
              type="text"
              className="form-control form-input"
              placeholder="password"
            />
            <LockIcon className="user-login-icon" />
            <span className="floating-label" disabled>
              Password
            </span>
          </span>
        </div>
      </form>
    );
  }
}

export default UserLogin;
