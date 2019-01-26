import React, { Component } from 'react';
import LockIcon from './Icons/lockIcon';
import UserLoginIcon from './Icons/userLoginIcon';

class UserSignup extends Component {
  state = {
    username: null,
    password: null
  };

  render() {
    return (
      <form className="signup-form mt-4">
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
              type="password"
              minLength={8}
              className="form-control form-input"
              placeholder="password"
            />
            <LockIcon className="user-login-icon" />
            <span className="floating-label" disabled>
              Password
            </span>
          </span>
          <span className="form-inline">
            <input
              type="password"
              minLength={8}
              className="form-control form-input"
              placeholder="re-type password"
            />
            <LockIcon className="user-login-icon" />
            <span className="floating-label" disabled>
              Re-Type Password
            </span>
          </span>
        </div>
      </form>
    );
  }
}

export default UserSignup;
