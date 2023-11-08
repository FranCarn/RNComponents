import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Slide, slideItems} from '../data/SlideShow-data';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export const SlideScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const renderItem = (item: Slide) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.img} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSubTitle}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 50}}>
      <HeaderTitle title="Slide Screen" />
      <Carousel
        data={slideItems}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
        }}
      />
      <Pagination
        activeDotIndex={activeIndex}
        dotsLength={slideItems.length}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 10,
          backgroundColor: '#5856d6',
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856d6',
  },
  itemSubTitle: {
    fontSize: 16,
  },
  itemImage: {width: 350, height: 400, resizeMode: 'center'},
  itemContainer: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 40,
    justifyContent: 'center',
  },
});
