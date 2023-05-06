import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { themeOptions } from "../Utils/themeOption";
import Select from "react-select";
import { useTheme } from "../Context/themeContext";
import Tippy from "@tippyjs/react";

const Footer = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (e) => {
    setTheme(e.value);
    localStorage.setItem("theme", JSON.stringify(e.value));
  };

  return (
    <div className="footer">
      <div className="links">
        <Tippy content="Github">
          <a href="https://github.com" target="blank">
            <GitHubIcon />
          </a>
        </Tippy>
        <Tippy content="LinkedIn">
          <a href="https://www.linkedin.com/in" target="blank">
            <LinkedInIcon />
          </a>
        </Tippy>
      </div>
      <div className="themeButton">
        <Select
          onChange={handleChange}
          options={themeOptions}
          menuPlacement="top"
          defaultValue={{ label: theme.label, value: theme }}
          styles={{
            control: (styles) => ({ ...styles, backgroundColor: theme.background }),
            menu: (styles) => ({ ...styles, backgroundColor: theme.background }),
            option: (styles, { isFocused }) => {
              return {
                ...styles,
                backgroundColor: !isFocused ? theme.background : theme.textColor,
                color: !isFocused ? theme.textColor : theme.background,
                cursor: "pointer",
              };
            },
          }}
        />
      </div>
    </div>
  );
};

export default Footer;
