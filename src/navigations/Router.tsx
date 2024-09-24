// External Packages import
import React from 'react';
// Internal file import
import AuthNavigations from './AuthStack';
import {useAppDispatch, useAppSelector} from 'hooks';
import {getItem} from 'utils';
import {logIn} from 'features';
import CustomDrawer from '../Layouts/DrawerLayouts';

const Routes = () => {
  // const {isLoggedIn} = useAppContext();
  const dispatch = useAppDispatch();
  const {isLoggedIn} = useAppSelector(state => state?.auth);
  const authCheck = getItem('Login');
  React.useEffect(() => {
    if (authCheck) {
      dispatch(logIn());
    } else {
    }
  }, [authCheck]);

  return <>{isLoggedIn ? <CustomDrawer /> : <AuthNavigations />}</>;
};

export default Routes;
