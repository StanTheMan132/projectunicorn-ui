import React from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import LoginOrSignupButton from "./LoginOrSignupButton";

const Navbar = ({ handleLoginClick, loginClicked, isAuthenticated }) => {
  let loginOrSignupButton = isAuthenticated ? null : (
    <LoginOrSignupButton
      handleLoginClick={handleLoginClick}
      loginClicked={loginClicked}
      isAuthenticated={isAuthenticated}
    />
  );

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <Link className="navbar-brand" to="/">
          <Logo />
        </Link>

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
            </navItems>
          </ul>
        </div>

        {loginOrSignupButton}
      </nav>
    </header>
  );
};

export default Navbar;
