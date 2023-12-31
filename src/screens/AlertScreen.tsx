import React from 'react';
import {Alert, Button, View} from 'react-native';
import prompt from 'react-native-prompt-android';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useNavigation} from '@react-navigation/native';

export const AlertScreen = () => {
  const {navigate} = useNavigation();
  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'Alert body',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: true, onDismiss: () => console.log('dismissed')},
    );
  };
  const showPrompt = () => {
    // Alert.prompt(
    //   'You sure?',
    //   'This action cant revert',
    //   (value: string) => console.log('info: ', value),
    //   'secure-text',
    //   '',
    //   'numeric',
    // );
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Show Alert" onPress={showAlert} />
      <View style={{height: 10}} />
      <Button title="Show Prompt" onPress={showPrompt} />
      <View style={{height: 10}} />
      <Button title="Go home" onPress={() => navigate('Home' as never)} />
    </View>
  );
};
