import {ImageSourcePropType} from 'react-native';

export type ImageType = {
  id: string;
  uri: ImageSourcePropType;
  location: LocationType;
  timestamp?: string;
};

export type LocationType = {
  latitude: number;
  longitude: number;
};
