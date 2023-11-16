import React, {useState, useContext} from 'react';
import {View, RefreshControl, ScrollView} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context';

export const PullToRefresh = () => {
  const [refreshing, setRefreshing] = useState(false);
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const handleRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('End of refresh');
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          progressViewOffset={10}
          progressBackgroundColor={colors.primary}
          style={{backgroundColor: colors.primary}}
          colors={['white', 'red']}
          tintColor={colors.text}
          title="Loading..."
          titleColor={colors.text}
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
      </View>
    </ScrollView>
  );
};
