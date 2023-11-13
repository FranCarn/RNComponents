import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styles as globalStyles} from '../theme/appTheme';
import {HeaderTitle} from '../components/HeaderTitle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ThemeContext} from '../context';

export const ThemeScreen = () => {
  const {setDarkTheme} = useContext(ThemeContext);
  return (
    <View style={globalStyles.globalMargin}>
      <HeaderTitle title="Theme" />
      <TouchableOpacity
        style={styles.toggleButton}
        activeOpacity={0.8}
        onPress={setDarkTheme}>
        <Text style={styles.buttonText}>Ligth / Dark</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleButton: {
    backgroundColor: '#5856d6',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
  },
});
