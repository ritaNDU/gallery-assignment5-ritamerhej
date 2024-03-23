import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainNavigatorStackPropsList = {
  HomeScreen: undefined;
  Gallery: undefined;
  ImageDetails: undefined;
};

export type MainNavigatorNavigationProps =
  NativeStackNavigationProp<MainNavigatorStackPropsList>;
export type MainNavigatorRouteProps = RouteProp<MainNavigatorStackPropsList>;
