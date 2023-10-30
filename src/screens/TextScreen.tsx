import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles as globalStyles} from '../theme/appTheme';

export const TextScreen = () => {
  return (
    <View style={globalStyles.globalMargin}>
      <HeaderTitle title="Text inputs" />
      <TextInput style={styles.inputStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
