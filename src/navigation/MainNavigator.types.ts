import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainNavigatorStackPropsList = {
  HomeScreen: undefined;
  Gallery: undefined;
  FavoritesScreen: undefined;
  CameraScreen: undefined;
  ImageDetails: {imageId: string};
};

export type MainNavigatorNavigationProps =
  NativeStackNavigationProp<MainNavigatorStackPropsList>;
export type MainNavigatorRouteProps = RouteProp<MainNavigatorStackPropsList>;
