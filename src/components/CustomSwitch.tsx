import React, {useState, useContext} from 'react';
import {Switch, Platform} from 'react-native';
import {ThemeContext} from '../context';

interface Props {
  isOn: boolean;
  onChange: (isEnabled: boolean) => void;
}
export const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: colors.primary}}
      thumbColor={Platform.OS === 'android' ? colors.primary : ''}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
