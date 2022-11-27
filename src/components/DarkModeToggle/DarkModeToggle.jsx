import React, { useState } from "react";
import ReactDom from "react-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const DarkModeToggle = () => {
  const isWindowContext = typeof window !== "undefined";
  const [isDarkMode, setDarkMode] = useState(
    isWindowContext ? window.__theme === 'dark' : false
  );

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    if (isWindowContext) {
      window.__setPreferredTheme(checked ? 'dark' : 'light');
    }
  };

  return (
    <DarkModeSwitch
      style={{}}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={30}
      moonColor="gold"
      sunColor="orangered"
    />
  );
};

export default DarkModeToggle;