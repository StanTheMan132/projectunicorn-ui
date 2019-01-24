import React from "react";

const LoginOrSignupButton = ({
  handleLoginClick,
  loginClicked,
  isAuthenticated
}) => {
  let loginOrSignupButton;
  let buttonText = loginClicked ? "sign up" : "login";

  loginOrSignupButton = isAuthenticated ? null : (
      <navPrompt>
          <loginPrompt onClick={handleLoginClick}>{buttonText}</loginPrompt>
      </navPrompt>
  );

  return loginOrSignupButton;
};

export default LoginOrSignupButton;
