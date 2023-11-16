import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {styles as globalStyles} from '../theme/appTheme';
import {HeaderTitle} from '../components/HeaderTitle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ThemeContext} from '../context';

export const ThemeScreen = () => {
  const {
    setDarkTheme,
    setLigthTheme,
    theme: {dark, colors},
  } = useContext(ThemeContext);

  return (
    <View style={globalStyles.globalMargin}>
      <HeaderTitle title="Theme" />
      <TouchableOpacity
        style={{...styles.toggleButton, backgroundColor: colors.primary}}
        activeOpacity={0.8}
        onPress={dark ? setLigthTheme : setDarkTheme}>
        <Text style={styles.buttonText}>
          {dark ? 'Ligth Theme' : 'Dark Theme'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleButton: {
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
