import React, {useRef} from 'react';
import {Animated, Button, Easing, StyleSheet, View} from 'react-native';

export const Animation101 = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const top = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(top, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.bounce,
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
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [{translateY: top}],
          marginBottom: 20,
        }}
      />
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
