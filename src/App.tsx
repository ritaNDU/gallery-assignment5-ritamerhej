import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import ImagesContextProvider from './store/ImagesContextProvider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ImagesContextProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </ImagesContextProvider>
    </GestureHandlerRootView>
  );
}

export default App;
