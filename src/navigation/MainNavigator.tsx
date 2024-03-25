import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavigatorStackPropsList} from './MainNavigator.types';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import GalleryScreen from '../screens/GalleryScreen/GalleryScreen';
import ImageDetailsScreen from '../screens/ImageDetailsScreen/ImageDetailsScreen';
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
        options={{title: 'Nostalgia'}}
      />
      <Stack.Screen
        name="GalleryScreen"
        component={gestureHandlerRootHOC(GalleryScreen)}
      />
      <Stack.Screen
        name="ImageDetailsScreen"
        component={gestureHandlerRootHOC(ImageDetailsScreen)}
        options={{title: 'Image Details'}}
      />
      <Stack.Screen
        name="FavoritesScreen"
        component={gestureHandlerRootHOC(FavoritesScreen)}
        options={{title: 'Favorites'}}
      />
      <Stack.Screen
        name="CameraScreen"
        component={gestureHandlerRootHOC(CameraScreen)}
        options={{title: 'Take a Picture'}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
