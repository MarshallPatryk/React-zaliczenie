import React, { createContext, useState } from 'react';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { specialTheme, normalTheme } from '../assets/styles/theme';
import { ThemeProvider } from 'styled-components';

export const FontSizeContext = createContext({
  fontSize: '',
  increaseFont: () => {},
  reduceFont: () => {},
  specialTheme: false,
  logged: false,
});

const FontProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(16);
  const [isSpecialTheme, setSpecialTheme] = useState(false);
  const [isLogged, setLogged] = useState(false);

  const increaseFont = () => {
    if (fontSize <= 24) setFontSize(fontSize + 1);
  };
  const reduceFont = () => {
    if (fontSize >= 12) setFontSize(fontSize - 1);
  };
  const handleLogin = () => {
    setLogged(true);
  };
  const handleTheme = () => {
    setSpecialTheme(!isSpecialTheme);
  };
  const handleLogout = () => {
    setLogged(false);
  };
  return (
    <FontSizeContext.Provider
      value={{
        fontSize,
        increaseFont,
        reduceFont,
        handleTheme,
        handleLogin,
        isLogged,
        handleLogout,
        isSpecialTheme
      }}
    >
      <ThemeProvider theme={isSpecialTheme ? specialTheme : normalTheme}>
        <GlobalStyle fontSize={fontSize} />
        {children}
      </ThemeProvider>
    </FontSizeContext.Provider>
  );
};
export default FontProvider;
