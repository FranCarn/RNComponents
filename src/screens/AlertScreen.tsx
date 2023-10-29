import React from 'react';
import {Alert, Button, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const AlertScreen = () => {
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
    Alert.prompt('You sure?', 'This action cant revert', (value: string) =>
      console.log('info: ', value),
    );
  };
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Show Alert" onPress={showAlert} />
      <Button title="Show Prompt" onPress={showPrompt} />
    </View>
  );
};
