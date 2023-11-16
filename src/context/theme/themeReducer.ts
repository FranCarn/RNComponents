import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'light_theme'} | {type: 'dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'dark' | 'light';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  colors: {
    primary: 'red',
    background: 'blue',
    card: '#084f6a',
    text: '#000',
    border: 'orange',
    notification: 'teal',
  },
  dividerColor: 'rgba(0,0,0,0.7)',
};
export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  colors: {
    primary: '#75cedb',
    background: '#000',
    card: 'green',
    text: '#fff',
    border: 'orange',
    notification: 'teal',
  },
  dividerColor: 'rgba(255,255,255,0.5)',
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'light_theme':
      return {...lightTheme};

    case 'dark_theme':
      return {...darkTheme};

    default:
      return state;
  }
};
