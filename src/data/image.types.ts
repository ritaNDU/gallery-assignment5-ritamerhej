export type ImageType = {
  id: string;
  uri: string;
  location: LocationType;
  timestamp?: string;
};

export type LocationType = {
  latitude: number;
  longitude: number;
};
