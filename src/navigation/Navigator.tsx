import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
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
} from '../screens';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#fff'},
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="Animation101" component={Animation101} />
      <Stack.Screen name="Animation102" component={Animation102} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="TextScreen" component={TextScreen} />
      <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
      <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen name="InfiniteScroll" component={InifiniteScroll} />
      <Stack.Screen name="SlideScreen" component={SlideScreen} />
    </Stack.Navigator>
  );
};
