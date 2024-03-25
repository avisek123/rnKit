import React from 'react';
import Router from './src/navigations/Router';
import {NavigationContainer} from '@react-navigation/native';
import {AppContextProvider} from 'contexts';
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <AppContextProvider>
            <Router />
          </AppContextProvider>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
