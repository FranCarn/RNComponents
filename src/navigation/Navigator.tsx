import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeContext} from '../context';
import {
  AlertScreen,
  Animation101,
  Animation102,
  HomeScreen,
  InifiniteScroll,
  ModalScreen,
  PullToRefresh,
  SectionListScreen,
  SlideScreen,
  SwitchScreen,
  TextScreen,
  ThemeScreen,
} from '../screens';

const Stack = createStackNavigator();

export const Navigator = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: '#fff'},
        }}>
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="Animation101" component={Animation101} />
        <Stack.Screen name="Animation102" component={Animation102} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="InfiniteScroll" component={InifiniteScroll} />
        <Stack.Screen name="ModalScreen" component={ModalScreen} />
        <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
        <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
        <Stack.Screen name="SlideScreen" component={SlideScreen} />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="TextScreen" component={TextScreen} />
        <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
