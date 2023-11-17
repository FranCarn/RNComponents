import React, {useContext} from 'react';
import {View, Text, StyleSheet, SectionList} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles as globalStyles} from '../theme/appTheme';
import {ItemSeparator} from '../components/ItemSeparator';
import {ThemeContext} from '../context';

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
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{...globalStyles.globalMargin, flex: 1}}>
      <SectionList
        stickySectionHeadersEnabled
        sections={houses}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={<HeaderTitle title="Section List" />}
        ListFooterComponent={<Text>Total of Houses: {houses.length}</Text>}
        ListFooterComponentStyle={{marginBottom: 70}}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {house}}) => (
          <View style={{backgroundColor: colors.background}}>
            <HeaderTitle title={house} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <Text>{'Total: ' + section.data.length}</Text>
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
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
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    marginVertical: 5,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
