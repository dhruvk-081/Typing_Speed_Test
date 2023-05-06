import React from "react";
import AccountCircle from "./AccountCircle";
import { Link } from "react-router-dom";
import { useTheme } from "../Context/themeContext";

const Header = () => {
  const { theme } = useTheme();

  return (
    <div className="header">
      <Link to="/" className="link">
        <img width="70px" src="./icon.png" alt="Logo" />
        <span>Typing Test</span>
      </Link>

      <div className="user-icon">
        <AccountCircle />
      </div>
    </div>
  );
};

export default Header;
