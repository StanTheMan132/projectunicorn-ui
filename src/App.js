import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

class App extends Component {
  state = {
    loginClicked: false,
    isAuthenticated: false
  };

  handleLoginClick = () => {
    this.setState({
      loginClicked: !this.state.loginClicked
    });
  };

  render() {
    const commonProps = {
      loginClicked: this.state.loginClicked,
      isAuthenticated: this.state.isAuthenticated
    };

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar
            handleLoginClick={this.handleLoginClick}
            loginClicked={this.state.loginClicked}
            isAuthenticated={this.state.isAuthenticated}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Home {...props} {...commonProps} />}
            />
            <Route
              path="/about"
              render={props => <About {...props} {...commonProps} />}
            />
            <Route
              path="/projects"
              render={props => <Projects {...props} {...commonProps} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
