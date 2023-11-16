import React, {CSSProperties, useContext, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {ThemeContext} from '../context';
interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}
export const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setisLoading] = useState(false);
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const finishLoading = () => {
    setisLoading(false);
    fadeIn();
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          color={colors.primary}
          size={30}
          style={{position: 'absolute'}}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={finishLoading}
        style={{...(style as any), opacity}}
      />
    </View>
  );
};
