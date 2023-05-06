import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "../Context/themeContext";
import { auth } from "../FirebaseConfig";
import { toast } from "react-toastify";
import errorMapping from "../Utils/errorMapping";

const SignUpForm = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { theme } = useTheme();

  const handleSubmit = () => {
    if (!email || !password || !confirmPassword) {
      toast.warning("🦄 Fill all details", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (password !== confirmPassword) {
      toast.warning("🦄 Password Not Matched", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        toast.success("🦄 Signup Successfully", {
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
        toast.error(errorMapping[err.code] || "some error occured", {
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
    <>
      <Box p={3} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <TextField variant="outlined" type="email" label="Enter Email" onChange={(e) => setEmail(e.target.value)} InputLabelProps={{ style: { color: theme.textColor } }} InputProps={{ style: { color: theme.textColor } }} />
        <TextField variant="outlined" type="password" label="Enter Password" onChange={(e) => setPassword(e.target.value)} InputLabelProps={{ style: { color: theme.textColor } }} InputProps={{ style: { color: theme.textColor } }} />
        <TextField variant="outlined" type="password" label="Enter Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} InputLabelProps={{ style: { color: theme.textColor } }} InputProps={{ style: { color: theme.textColor } }} />
        <Button onClick={handleSubmit} variant="contained" size="large" style={{ backgroundColor: theme.textColor, color: theme.background }}>
          Signup
        </Button>
      </Box>
    </>
  );
};

export default SignUpForm;
