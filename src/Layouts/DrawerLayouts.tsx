import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet} from 'react-native';
import CustomDrawer from './CustomDrawer';
import MainStack from '../navigations/MainStack';
const Drawer = createDrawerNavigator();
const DrawerLayout = () => {
  return (
    <Drawer.Navigator
      drawerContent={() => <CustomDrawer />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="MainStack" component={MainStack} />
    </Drawer.Navigator>
  );
};

export default DrawerLayout;

const styles = StyleSheet.create({});
