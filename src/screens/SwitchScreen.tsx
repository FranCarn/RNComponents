import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {CustomSwitch} from '../components/CustomSwitch';

const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });
  const handleChange = (value: boolean, field: keyof typeof state) => {
    setState({...state, [field]: value});
  };
  const {isActive, isHappy, isHungry} = state;
  return (
    <View style={styles.container}>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isActive</Text>
      </View>
      <CustomSwitch
        isOn={isActive}
        onChange={value => handleChange(value, 'isActive')}
      />
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHappy</Text>
      </View>
      <CustomSwitch
        isOn={isHappy}
        onChange={value => handleChange(value, 'isHappy')}
      />
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>isHungry</Text>
      </View>
      <CustomSwitch
        isOn={isHungry}
        onChange={value => handleChange(value, 'isHungry')}
      />
      <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  switchText: {
    marginTop: 10,
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default SwitchScreen;
