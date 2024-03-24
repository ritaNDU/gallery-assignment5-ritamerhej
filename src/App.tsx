import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import ImagesContextProvider from './store/ImagesContextProvider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';

function App() {
  CameraRoll.saveAsset('./assets/image1.png');
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
