import React, { Component } from "react";

export default class UserLogin extends Component {
  state = {
    username: null,
    password: null
  };

  render() {
    return (
      <form class="login-form mt-4">
        <div className="form-group">
          <span className="form-inline">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="username"
            />
          </span>
          <span className="form-inline">
            <input
              type="text"
              className="form-control"
              id="password"
              placeholder="password"
            />
          </span>
        </div>
      </form>
    );
  }
}
