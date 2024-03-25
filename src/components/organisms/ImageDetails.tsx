import {View, Text, Image, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import LocationMap from '../molecules/LocationMap';
import {AppContextType, ImagesContext} from '../../store/ImagesContextProvider';
import {ImageType} from '../../data/image.types';
import {getImageById} from '../../utils/imagesUtils';

type Props = {
  imageId: string;
};

const ImageDetails = ({imageId}: Props) => {
  const {imagesState} = useContext(ImagesContext) as AppContextType;

  const image: ImageType | undefined = getImageById(
    imagesState.allImages,
    imageId,
  );
  return (
    <ScrollView>
      {!image ? (
        <Text>Image data unavailable</Text>
      ) : (
        <View>
          <View style={{alignItems: 'center'}}>
            <Image source={image.uri} style={{width: '80%', height: 300}} />
          </View>
          <Text>Location</Text>
          <LocationMap location={image.location} />
        </View>
      )}
    </ScrollView>
  );
};

export default ImageDetails;
