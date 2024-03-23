import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import ImagesContextProvider from './store/ImagesContextProvider';

function App() {
  return (
    <ImagesContextProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </ImagesContextProvider>
  );
}

export default App;
