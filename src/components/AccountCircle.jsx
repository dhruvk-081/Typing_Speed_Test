import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AppBar, Modal, Tabs, Tab, Box } from "@mui/material";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useTheme } from "../Context/themeContext";
import GoogleButton from "react-google-button";
import { signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { toast } from "react-toastify";
import errorMapping from "../Utils/errorMapping";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const AccountCircle = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const { theme } = useTheme();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();


  const handleModalOpen = () => {
    if (user) {
      navigate("/user");
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleValueChange = (e, v) => {
    setValue(v);
  };

  const logout = () => {
    auth
      .signOut()
      .then((res) => {
        toast.success("🦄 Logged Out Successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        toast.error("Not able to Logout", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const handleGoogleSignIn = () => {
    
  const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        toast.success("🦄 Login Successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        handleClose();
      })
      .catch((err) => {
        toast.error(errorMapping[err.code] || "Not able to use google authentication", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div>
      <AccountCircleIcon fontSize="large" onClick={handleModalOpen} />
      {user && <LogoutIcon onClick={logout} fontSize="large" />}

      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.background,
        }}
      >
        <div style={{ width: "400px", textAlign: "center" }}>
          <AppBar position="static" style={{ background: "transparent" }}>
            <Tabs value={value} onChange={handleValueChange} variant="fullWidth">
              <Tab label="login" style={{ color: theme.textColor }}></Tab>
              <Tab label="signup" style={{ color: theme.textColor }}></Tab>
            </Tabs>
          </AppBar>
          {value === 0 && <LoginForm handleClose={handleClose} />}
          {value === 1 && <SignUpForm handleClose={handleClose} />}

          <Box>
            <span>OR</span>
            <GoogleButton style={{ width: "90%", margin: "10px auto 10px" }} onClick={handleGoogleSignIn} />
          </Box>
        </div>
      </Modal>
    </div>
  );
};

export default AccountCircle;
