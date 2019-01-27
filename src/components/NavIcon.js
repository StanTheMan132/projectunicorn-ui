import React from 'react';
import { Link } from 'react-router-dom';

const NavIcon = ({ url, className, title }) => {
  return (
    <div className="col-xs-4">
      <Link to={url} className={className} />
      <span className="icon-title">{title}</span>
    </div>
  );
};

export default NavIcon;
