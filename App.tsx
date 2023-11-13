import 'react-native-gesture-handler';
import React from 'react';
import {Navigator} from './src/navigation/Navigator';
import {ThemeProvider} from './src/context/theme/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DarkTheme.colors,
//   },
// };

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};

const AppState = ({children}: {children: JSX.Element}) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
