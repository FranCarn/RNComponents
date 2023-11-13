import React from 'react';
import {createContext} from 'react';
interface Props {
  children: JSX.Element;
}

interface ThemeContextProps {
  theme: any;
  setDarkTheme: () => void;
  setLigthTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: Props) => {
  const theme = {};

  const setDarkTheme = () => {};

  const setLigthTheme = () => {};

  return (
    <ThemeContext.Provider value={{setLigthTheme, setDarkTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};
