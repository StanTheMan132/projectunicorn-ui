import React from 'react';
import { Link } from 'react-router-dom';

const UserProfileNavItem = () => {
  return (
    <div className="user-profile-nav-item">
      <Link to="/users/GreenWithMV" className="username">
        GreenWithMV
      </Link>
      <Link to="/users/GreenWithMV" className="fa fa-user user-icon" />
    </div>
  );
};

export default UserProfileNavItem;
