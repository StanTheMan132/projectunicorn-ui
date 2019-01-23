import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

class App extends Component {
  state = {
    loginClicked: false,
    isAuthenticated: false
  };

  handleLoginClick = () => {
    console.log(this.state.loginClicked);

    this.setState({
      loginClicked: !this.state.loginClicked
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar
            handleLoginClick={this.handleLoginClick}
            loginClicked={this.state.loginClicked}
            isAuthenticated={this.state.isAuthenticated}
          />
          <Route
            exact
            path="/"
            render={props => (
              <Home
                loginClicked={this.state.loginClicked}
                {...props}
                isAuthenticated={this.state.isAuthenticated}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
