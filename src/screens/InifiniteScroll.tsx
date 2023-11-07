import React, {useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {FadeInImage} from '../components/FadeInImage';

export const InifiniteScroll = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
  const loadMore = () => {
    const newArray: number[] = [];

    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setNumbers(prev => [...prev, ...newArray]);
  };
  const renderItem = (item: number) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/500/400`}
        style={{width: '100%', height: 400}}
      />
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => (
          <View style={{marginHorizontal: 20}}>
            <HeaderTitle title="Infinite Scroll" />
          </View>
        )}
        onEndReachedThreshold={0.5}
        onEndReached={loadMore}
        ListFooterComponent={() => (
          <View style={styles.loader}>
            <ActivityIndicator size={25} color="5856d6" />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageItem: {width: '100%', height: 400},
  loader: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
