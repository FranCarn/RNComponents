import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Slide, slideItems} from '../data/SlideShow-data';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

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
  const {navigate} = useNavigation();
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
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
        {slideItems.length - 1 === activeIndex && (
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#5856d6',
              borderRadius: 10,
              flexDirection: 'row',
              height: 50,
              justifyContent: 'center',
              width: 130,
            }}
            activeOpacity={0.8}
            onPress={() => navigate('Home')}>
            <Text style={{fontSize: 20, color: '#fff'}}>Start!</Text>
            <Icon name="chevron-forward-outline" color="#fff" size={35} />
          </TouchableOpacity>
        )}
      </View>
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
