import React from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';

export const Animation101 = () => {
  const {opacity, top, fadeIn, fadeOut} = useAnimation();

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
