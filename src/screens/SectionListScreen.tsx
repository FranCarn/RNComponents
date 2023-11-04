import React from 'react';
import {View, Text, StyleSheet, SectionList} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles as globalStyles} from '../theme/appTheme';

interface Houses {
  house: string;
  data: string[];
}

const houses: Houses[] = [
  {
    house: 'DC Comics',
    data: ['Batman', 'Superman', 'Robin'],
  },
  {
    house: 'Marvel Comics',
    data: ['Antman', 'Thor', 'Spiderman', 'Antman'],
  },
  {
    house: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama'],
  },
];

export const SectionListScreen = () => {
  return (
    <View style={{...globalStyles.globalMargin, flex: 1}}>
      <SectionList
        sections={houses}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {house}}) => (
          <View style={{backgroundColor: '#fff'}}>
            <HeaderTitle title={house} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
