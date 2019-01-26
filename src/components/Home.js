import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UserProfile from './UserProfile';
import UserLogin from './UserLogin';
import UserSignup from './userSignup';
import MultiMemberIcon from './Icons/multiMemberIcon';
import ProjectsIcon from './Icons/projectsIcon';
import CommitsIcon from './Icons/commitsIcon';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signupClicked: false
    };
    this.handleSignupClick = this.handleSignupClick.bind(this);
  }

  handleSignupClick() {
    this.setState({
      signupClicked: true
    });
  }

  render() {
    let landingContent;
    const { signupClicked } = this.state;

    // Send the user directly to their profile if they are logged in
    if (this.props.isAuthenticated) {
      landingContent = <UserProfile />;
    } else if (this.props.loginClicked) {
      landingContent = (
        <div className="login">
          <UserLogin />
          <loginButton>
            <Link to="/signup">
              <input type="button" value="Login" />
            </Link>
          </loginButton>
        </div>
      );
    } else if (!signupClicked) {
      landingContent = (
        <div className="landing-content">
          <description>
            <p>
              <span>Project Unicorn</span> is an online community focused on{' '}
              <br />
              collaborative learning by building <br /> and shipping{' '}
              <span> meaningful</span> software.
            </p>
          </description>
          <signupButton>
            <input
              type="button"
              value="Sign Up"
              onClick={this.handleSignupClick}
            />
          </signupButton>
        </div>
      );
    } else {
      landingContent = <UserSignup />;
    }

    return (
      <landingContainer>
        <vertical />
        <mainLanding>
          <slogan className="slogan-mobile">
            <span>build</span>
            <span>something</span>
            <span>awesome</span>
          </slogan>
          <slogan className="slogan-desktop">
            <span>build something</span>
            <span>awesome</span>
          </slogan>

          {landingContent}
        </mainLanding>
        <landingStats>
          <div className="stat-container">
            <div className="stat">
              <MultiMemberIcon />
              <span className="stat-number">87</span>
              <span className="stat-parameter">users</span>
            </div>
            <div className="stat">
              <ProjectsIcon />
              <span className="stat-number">9</span>
              <span className="stat-parameter">projects</span>
            </div>
            <div className="stat">
              <CommitsIcon />
              <span className="stat-number">23</span>
              <span className="stat-parameter">commits</span>
            </div>
          </div>
        </landingStats>
        <bubbleOne />
        <bubbleTwo>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            viewBox="0 0 433.653 533.332"
            x="0px"
            y="0px"
            width="433.653px"
            height="533.332px"
          >
            <filter
              id="Path_80"
              x="0"
              y="0"
              width="433.653"
              height="533.332"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dx="2" dy="6" input="SourceAlpha" />
              <feGaussianBlur result="blur" stdDeviation="2" />
              <feFlood flood-opacity="0.071" />
              <feComposite in2="blur" operator="in" />
              <feComposite in="SourceGraphic" operator="over" />
            </filter>
            <g filter="url(#Path_80)" transform="matrix(1, 0, 0, 1, 0, 0)">
              <path
                id="Path_80-2_1_"
                d="M 239.334 18.65 c 101.971 10.3 173.779 126.135 160.385 258.725 C 386.327 409.965 292.805 509.1 190.835 498.8 C 88.865 488.5 17.057 372.665 30.45 240.075 C 43.843 107.485 137.365 8.35 239.334 18.65 Z"
              />
            </g>
          </svg>
        </bubbleTwo>
        <bubbleThree>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            viewBox="0 0 424.873 449.792"
            x="0px"
            y="0px"
            width="424.873px"
            height="449.792px"
          >
            <filter
              id="Path_81"
              x="0"
              y="0"
              width="424.873"
              height="449.792"
              filterUnits="userSpaceOnUse"
            >
              <feOffset dx="2" dy="6" input="SourceAlpha" />
              <feGaussianBlur result="blur" stdDeviation="2" />
              <feFlood flood-opacity="0.071" />
              <feComposite in2="blur" operator="in" />
              <feComposite in="SourceGraphic" operator="over" />
            </filter>
            <g filter="url(#Path_81)" transform="matrix(1, 0, 0, 1, 0, 0)">
              <path
                id="Path_81-2_1_"
                d="M 230.556 18.65 c 101.969 10.3 175.657 107.52 164.584 217.145 C 384.067 345.421 292.425 425.941 190.455 415.64 C 88.485 405.339 14.797 308.121 25.87 198.495 C 36.943 88.869 128.585 8.35 230.556 18.65 Z"
              />
            </g>
          </svg>
        </bubbleThree>
      </landingContainer>
    );
  }
}

export default Home;
