import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../interfaces/appInterfaces';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

interface Props {
  item: MenuItem;
}

export const FlatListMenuItem = ({item}: Props) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigate(item.component as never)}>
      <View style={styles.container}>
        <Icon name={item.icon} color="gray" size={23} />
        <Text style={styles.itemText}>{item.name}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" color="gray" size={23} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
