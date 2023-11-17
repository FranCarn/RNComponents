import React, {useEffect, useReducer} from 'react';
import {createContext} from 'react';
import {ThemeState, darkTheme, lightTheme, themeReducer} from './themeReducer';
import {useColorScheme} from 'react-native';
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
  const colorScheme = useColorScheme();
  const [theme, dispatch] = useReducer(
    themeReducer,
    colorScheme === 'light' ? lightTheme : darkTheme,
  );

  const setDarkTheme = () => {
    dispatch({type: 'dark_theme'});
  };

  const setLigthTheme = () => {
    dispatch({type: 'light_theme'});
  };

  useEffect(() => {
    colorScheme === 'light' ? setLigthTheme() : setDarkTheme();
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={{setLigthTheme, setDarkTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};
