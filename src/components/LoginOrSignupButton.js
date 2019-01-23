import React from "react";

const LoginOrSignupButton = ({
  handleLoginClick,
  loginClicked,
  isAuthenticated
}) => {
  let loginOrSignupButton;
  let buttonText = loginClicked ? "Sign Up" : "Login";

  loginOrSignupButton = isAuthenticated ? null : (
    <ul className="navbar-nav ml-auto">
      <navItems>
        <li className="">
          <loginButton onClick={handleLoginClick}>{buttonText}</loginButton>
        </li>
      </navItems>
    </ul>
  );

  return loginOrSignupButton;
};

export default LoginOrSignupButton;
