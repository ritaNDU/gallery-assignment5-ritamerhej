import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useReducer,
  useState,
} from 'react';
import {LocationType} from '../data/image.types';
import {Action, ImageState} from './imageReducer';
import {imageReducer} from './imageReducer';
import images from '../data/mockData';

export type AppContextType = {
  imagesState: ImageState;
  dispatch: React.Dispatch<Action>;
  currentLocation: LocationType;
  setCurrentLocation: Dispatch<SetStateAction<LocationType>>;
};

export const ImagesContext = createContext<AppContextType | undefined>(
  undefined,
);

const ImagesContextProvider = ({children}: {children: React.JSX.Element}) => {
  const initialLocation: LocationType = {
    latitude: 33.85787399361332,
    longitude: 35.56873144371473,
  };
  const [imagesState, dispatch] = useReducer(imageReducer, {allImages: images});
  const [currentLocation, setCurrentLocation] =
    useState<LocationType>(initialLocation);
  return (
    <ImagesContext.Provider
      value={{imagesState, dispatch, currentLocation, setCurrentLocation}}>
      {children}
    </ImagesContext.Provider>
  );
};

export default ImagesContextProvider;
