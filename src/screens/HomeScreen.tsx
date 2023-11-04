import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from '../theme/appTheme';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {menuItems} from '../data/menuItems';
import {HeaderTitle} from '../components/HeaderTitle';
import {ItemSeparator} from '../components/ItemSeparator';

export const HomeScreen = () => {
  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        keyExtractor={item => item.name}
        renderItem={({item}) => <FlatListMenuItem item={item} />}
        ListHeaderComponent={() => <HeaderTitle title="Menu Options" />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};
