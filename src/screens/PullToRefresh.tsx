import React, {useState} from 'react';
import {View, RefreshControl, ScrollView} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const PullToRefresh = () => {
  const [refreshing, setRefreshing] = useState(false);
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
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
      </View>
    </ScrollView>
  );
};
