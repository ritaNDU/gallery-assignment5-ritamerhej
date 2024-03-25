import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavigatorStackPropsList} from './MainNavigator.types';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Gallery from '../screens/Gallery/GalleryScreen';
import ImageDetails from '../screens/ImageDetails/ImageDetailsScreen';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import FavoritesScreen from '../screens/FavoritesScreen/FavoritesScreen';
import CameraScreen from '../screens/CameraScreen/CameraScreen';

const Stack = createNativeStackNavigator<MainNavigatorStackPropsList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={gestureHandlerRootHOC(HomeScreen)}
      />
      <Stack.Screen name="Gallery" component={gestureHandlerRootHOC(Gallery)} />
      <Stack.Screen
        name="ImageDetails"
        component={gestureHandlerRootHOC(ImageDetails)}
      />
      <Stack.Screen
        name="FavoritesScreen"
        component={gestureHandlerRootHOC(FavoritesScreen)}
      />
      <Stack.Screen
        name="CameraScreen"
        component={gestureHandlerRootHOC(CameraScreen)}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
