import React from 'react';
import {View, FlatList, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface MenuItem {
  name: string;
  icon: string;
  components: string;
}
const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    components: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'star-outline',
    components: 'Animation101Screen',
  },
  {
    name: 'Animation 103',
    icon: 'return-up-back-outline',
    components: 'Animation101Screen',
  },
];

export const HomeScreen = () => {
  const renderMenuItem = (item: MenuItem) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Icon name={item.icon} />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => renderMenuItem(item)}
        keyExtractor={item => item.name}
      />
    </View>
  );
};
