import {View, FlatList, ListRenderItemInfo} from 'react-native';
import React, {useContext} from 'react';
import {AppContextType, ImagesContext} from '../../store/ImagesContextProvider';
import ImageCard from '../molecules/ImageCard';
import {ImageType} from '../../data/image.types';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProps} from '../../navigation/MainNavigator.types';
import {sortByDistance} from '../../utils/locationUtils';
import useManageUserLocation from '../../hooks/useManageUserLocation';

const ImagesList = () => {
  const {currentLocation} = useManageUserLocation();
  const {imagesState} = useContext(ImagesContext) as AppContextType;
  const navigation = useNavigation<MainNavigatorNavigationProps>();

  const allImages = sortByDistance(imagesState.allImages, currentLocation);

  const handleImagePress = (imageId: string) => () => {
    navigation.navigate('ImageDetails', {imageId: imageId});
  };

  function renderImage({item}: ListRenderItemInfo<ImageType>) {
    return (
      <ImageCard imageUri={item.uri} onPress={handleImagePress(item.id)} />
    );
  }

  return (
    <View>
      <FlatList data={allImages} renderItem={renderImage} />
    </View>
  );
};

export default ImagesList;
