import React from "react";
import AccountCircle from "./AccountCircle";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img width="80px" src="./icon.png" alt="Logo" />
      </div>
      <div className="user-icon">
        <AccountCircle />
      </div>
    </div>
  );
};

export default Header;