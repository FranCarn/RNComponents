import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Image} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';

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
      <Image
        style={{width: '100%', height: 400}}
        source={{uri: `https://picsum.photos/id/${item}/500/400`}}
      />
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
        onEndReachedThreshold={0.5}
        onEndReached={loadMore}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: '#2e2e2e',
    color: '#fff',
    height: 150,
  },
});
