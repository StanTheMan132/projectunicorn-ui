import React from 'react';
import { Link } from 'react-router-dom';

const SecondaryNavBar = ({ selectedItemIndex }) => {
  var classNames = [
    'fa fa-graduation-cap nav-icon' +
      (selectedItemIndex === 0 ? ' icon-active' : ''),
    'fa fa-list-alt nav-icon' + (selectedItemIndex === 1 ? ' icon-active' : ''),
    'fa fa-users nav-icon' + (selectedItemIndex === 2 ? ' icon-active' : ''),
    'fa fa-chart-pie nav-icon' + (selectedItemIndex === 3 ? ' icon-active' : '')
  ];

  console.log(classNames);

  let content = (
    <div className="navbar-secondary">
      <div className="row nav-icons">
        <div className="col-xs-4">
          <Link to="/education" className={classNames[0]} />
          <span className="icon-title">Education</span>
        </div>
        <div className="col-xs-4">
          <Link to="/projects" className={classNames[1]} />
          <span className="icon-title">Projects</span>
        </div>
        <div className="col-xs-4">
          <Link to="/teams" i className={classNames[2]} />
          <span className="icon-title">Dream Team</span>
        </div>
        <div className="col-xs-4">
          <Link to="/stats" className={classNames[3]} />
          <span className="icon-title">Stats</span>
        </div>
      </div>
    </div>
  );

  return <div>{content}</div>;
};

export default SecondaryNavBar;
