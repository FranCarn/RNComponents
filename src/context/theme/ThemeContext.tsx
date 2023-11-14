import React, {useReducer} from 'react';
import {createContext} from 'react';
import {ThemeState, lightTheme, themeReducer} from './themeReducer';
interface Props {
  children: JSX.Element;
}

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLigthTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: Props) => {
  const [theme, dispatch] = useReducer(themeReducer, lightTheme); // Todo: get global theme

  const setDarkTheme = () => {
    dispatch({type: 'dark_theme'});
  };

  const setLigthTheme = () => {
    dispatch({type: 'light_theme'});
  };

  return (
    <ThemeContext.Provider value={{setLigthTheme, setDarkTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};
