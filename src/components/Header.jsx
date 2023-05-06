import React from "react";
import AccountCircle from "./AccountCircle";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../FirebaseConfig";
import { Link } from "react-router-dom";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="header">

      <Link to="/">
        <div className="logo">
          <img width="70px" src="./icon.png" alt="Logo" />
        </div>
      </Link>

      <div className="user-icon">
        <AccountCircle />
      </div>

    </div>
  );
};

export default Header;
