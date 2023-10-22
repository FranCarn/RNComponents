import React, {useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

export const Animation101 = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.purpleBox, opacity}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    width: 150,
    heitgh: 150,
  },
});
