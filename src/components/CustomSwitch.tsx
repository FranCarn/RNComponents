import React, {useState} from 'react';
import {Switch, Platform} from 'react-native';

interface Props {
  isOn: boolean;
  onChange: (isEnabled: boolean) => void;
}
export const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: '#5856D6'}}
      thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};