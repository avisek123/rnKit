import {StyleSheet, View} from 'react-native';
import React from 'react';
import {AppText} from '../components/core';

const CustomDrawer = () => {
  return (
    <View>
      <AppText text={'Logout'} style={styles.textColor} />
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  textColor: {
    fontSize: 15,
    color: '#000',
    fontWeight: '700',
  },
});
