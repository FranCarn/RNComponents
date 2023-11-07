import React, {useState} from 'react';
import {ActivityIndicator, Animated, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
interface Props {
  uri: string;
}
export const FadeInImage = ({uri}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setisLoading] = useState(false);

  const finishLoading = () => {
    setisLoading(false);
    fadeIn();
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          color="#58566d"
          size={30}
          style={{position: 'absolute'}}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={finishLoading}
        style={{width: '100%', height: 400, opacity}}
      />
    </View>
  );
};
