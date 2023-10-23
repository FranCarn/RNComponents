import React, {useRef} from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';

export const Animation101 = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => console.log('finish animation'));
  };
  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.purpleBox, opacity, marginBottom: 20}} />
      <Button title="Fade in" onPress={fadeIn} />
      <Button title="Fade out" onPress={fadeOut} />
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
