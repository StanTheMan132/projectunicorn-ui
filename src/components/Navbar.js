import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Logo from './Logo';
import LoginOrSignupButton from './LoginOrSignupButton';
import SearchBox from './SearchBox';
import UserProfileNavItem from './UserProfileNavItem';

class Navbar extends Component {
  render() {
    const {
      handleLoginClick,
      loginClicked,
      isAuthenticated,
      location
    } = this.props;
    let loginOrSignupButton = isAuthenticated ? null : (
      <LoginOrSignupButton
        handleLoginClick={handleLoginClick}
        loginClicked={loginClicked}
        isAuthenticated={isAuthenticated}
      />
    );
    const isHome = location.pathname === '/';
    const userProfileNavItem = isAuthenticated ? <UserProfileNavItem /> : null;
    let navClassNames = 'navbar navbar-expand-lg navbar-dark fixed-top';

    console.log(location.pathname);

    if (!isHome) {
      navClassNames += ' nav-not-home';
    } else {
      navClassNames = 'navbar navbar-dark fixed-top';
    }

    return (
      <header>
        <nav className={navClassNames}>
          <Link className="navbar-brand" to="/">
            <Logo />
          </Link>
          <div className="navbar-menu-items">
            {loginOrSignupButton}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <navItems>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/members">
                    Members
                  </Link>
                </li>
                <SearchBox />
                {userProfileNavItem}
              </navItems>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(Navbar);
