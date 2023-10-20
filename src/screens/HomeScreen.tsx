import React from 'react';
import {View, FlatList, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

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
    components: 'Animation102Screen',
  },
  {
    name: 'Animation 103',
    icon: 'return-up-back-outline',
    components: 'Animation103Screen',
  },
];

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const renderMenuItem = (item: MenuItem) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Icon name={item.icon} />
      </View>
    );
  };
  const renderListHeader = () => {
    return (
      <View style={{marginTop: top + 20, marginBottom: 20}}>
        <Text style={styles.title}>Menu Options</Text>
      </View>
    );
  };
  const itemSeparator = () => {
    return (
      <View
        style={{borderBottomWidth: 1, opacity: 0.4, marginVertical: 8}}></View>
    );
  };
  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        keyExtractor={item => item.name}
        renderItem={({item}) => renderMenuItem(item)}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
