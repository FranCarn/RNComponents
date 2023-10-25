import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from '../theme/appTheme';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {menuItems} from '../data/menuItems';
import {HeaderTitle} from '../components/HeaderTitle';

export const HomeScreen = () => {
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
        renderItem={({item}) => <FlatListMenuItem item={item} />}
        ListHeaderComponent={() => <HeaderTitle title="Menu Options" />}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
