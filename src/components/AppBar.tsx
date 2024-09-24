// External Library Import
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import React from 'react';
// Internal Library Import
import {MainNavigationProps} from 'src/types/allRoutes';
import {ImagePath} from '../constant';
import {AppText} from './core';
interface AppBarProps {
  text?: string;
}
const AppBar = ({text}: AppBarProps) => {
  const {navigate, goBack, dispatch} = useNavigation<MainNavigationProps>();
  return (
    <>
      <View style={styles.headWrapper}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => {
              dispatch(DrawerActions.openDrawer());
            }}>
            <FastImage
              style={{height: 25, width: 25, marginTop: 5}}
              source={ImagePath.menu}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>
          <AppText text={text || 'Products_Gallery'} style={styles.title} />

          <TouchableOpacity
            onPress={() => {
              if (text === 'Settings') {
                goBack();
              } else {
                navigate('Settings');
              }
            }}
            style={{
              alignSelf: 'center',
            }}>
            <Image
              style={{
                tintColor: '#000',
              }}
              source={
                text === 'Settings' ? ImagePath.icBack : ImagePath.icSetting
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  headWrapper: {
    backgroundColor: '#fff',
    elevation: 7,
    padding: 10,
    borderBottomWidth: 0.5,
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#000',
    fontSize: 18,
  },
});
