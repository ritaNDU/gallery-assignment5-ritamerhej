import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainNavigatorStackPropsList = {
  HomeScreen: undefined;
  GalleryScreen: undefined;
  FavoritesScreen: undefined;
  CameraScreen: undefined;
  ImageDetailsScreen: {imageId: string};
};

export type MainNavigatorNavigationProps =
  NativeStackNavigationProp<MainNavigatorStackPropsList>;
export type MainNavigatorRouteProps = RouteProp<MainNavigatorStackPropsList>;
