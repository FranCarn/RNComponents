import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
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
  return {
    opacity,
    top,
    fadeIn,
    fadeOut,
  };
};
