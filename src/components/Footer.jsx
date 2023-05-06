import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { themeOptions } from "../Utils/themeOption";
import Select from "react-select";
import { useTheme } from "../Context/themeContext";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import { Link } from "@mui/material";
import Tippy from "@tippyjs/react";

const Footer = () => {
  const { theme, setTheme, defaultValue } = useTheme();

  const handleChange = (e) => {
    setTheme(e.value);
    localStorage.setItem("theme", JSON.stringify(e.value));
  };

  return (
    <div className="footer">
      <div className="links">
        <Tippy content="Github">
          <Link href="https://github.com" target="blank" underline="none" color="inherit">
            <GitHubIcon />
          </Link>
        </Tippy>
        <Tippy content="LinkedIn">
          <Link href="https://www.linkedin.com/in" target="blank" underline="none" color="inherit">
            <LinkedInIcon />
          </Link>
        </Tippy>
        <Tippy content="Docunment">
          <Link href="https://docs.google.com/" target="blank" underline="none" color="inherit">
            <DocumentScannerIcon />
          </Link>
        </Tippy>
      </div>

      <div className="themeButton">
        <Select
          onChange={handleChange}
          options={themeOptions}
          menuPlacement="top"
          defaultValue={{ label: defaultValue.label, value: defaultValue }}
          styles={{
            control: (styles) => ({ ...styles, backgroundColor: theme.background, color: theme.textColor }),
            menu: (styles) => ({ ...styles, backgroundColor: theme.background }),
            option: (styles, { isFocused }) => {
              return {
                ...styles,
                backgroundColor: !isFocused ? theme.background : theme.textColor,
                color: !isFocused ? theme.textColor : theme.background,
                cursor: "pointer",
              };
            },
            singleValue: (styles) => ({ ...styles, color: theme.title }),
          }}
        />
      </div>
    </div>
  );
};

export default Footer;
