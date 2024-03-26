import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainNavigatorStackPropsList} from './MainNavigator.types';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import GalleryScreen from '../screens/GalleryScreen/GalleryScreen';
import ImageDetailsScreen from '../screens/ImageDetailsScreen/ImageDetailsScreen';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import FavoritesScreen from '../screens/FavoritesScreen/FavoritesScreen';
import CameraScreen from '../screens/CameraScreen/CameraScreen';
import theme from '../styles/theme';

const Stack = createNativeStackNavigator<MainNavigatorStackPropsList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: theme.colors.backgroundColor},
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={gestureHandlerRootHOC(HomeScreen)}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GalleryScreen"
        component={gestureHandlerRootHOC(GalleryScreen)}
        options={{title: 'Gallery'}}
      />
      <Stack.Screen
        name="ImageDetailsScreen"
        component={gestureHandlerRootHOC(ImageDetailsScreen)}
        options={{
          title: 'Image Details',
        }}
      />
      <Stack.Screen
        name="FavoritesScreen"
        component={gestureHandlerRootHOC(FavoritesScreen)}
        options={{
          title: 'Favorites',
          contentStyle: {backgroundColor: theme.colors.favoritesSecondary},
        }}
      />
      <Stack.Screen
        name="CameraScreen"
        component={gestureHandlerRootHOC(CameraScreen)}
        options={{
          title: 'Take a Picture',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
