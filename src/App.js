// import logo from "./logo.svg";
// import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Styles/Global";

import { useTheme } from "./Context/themeContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
      <ToastContainer />
          <GlobalStyles />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/user" element={<UserPage/>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
