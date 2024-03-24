import {ImageProps} from 'react-native';

export type ImageType = {
  id: string;
  uri: ImageProps;
  location: LocationType;
  timestamp?: string;
};

export type LocationType = {
  latitude: number;
  longitude: number;
};
