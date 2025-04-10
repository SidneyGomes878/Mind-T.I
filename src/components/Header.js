import React from 'react';
import '../App.css';

const logo = '/favicon-Mind.png';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <img src={logo} alt="Mind T.I" className="header-logo" />
        <p className="header-title">Mind T.I</p>
      </div>
    </div>
  );
};

export default Header;
