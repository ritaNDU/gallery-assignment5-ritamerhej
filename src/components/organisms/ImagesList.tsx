import {View, FlatList, ListRenderItemInfo, Text} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {AppContextType, ImagesContext} from '../../store/ImagesContextProvider';
import ImageCard from '../molecules/ImageCard';
import {ImageType} from '../../data/image.types';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProps} from '../../navigation/MainNavigator.types';
import {sortByDistance} from '../../utils/locationUtils';
import useManageUserLocation from '../../hooks/useManageUserLocation';

const ImagesList = () => {
  const {updateUserLocation, currentLocation} = useManageUserLocation();
  const {imagesState} = useContext(ImagesContext) as AppContextType;
  const navigation = useNavigation<MainNavigatorNavigationProps>();

  const allImages = sortByDistance(imagesState.allImages, currentLocation);

  const handleImagePress = (imageId: string) => () => {
    navigation.navigate('ImageDetails', {imageId: imageId});
  };

  function renderImage({item}: ListRenderItemInfo<ImageType>) {
    if (item == null) {
      return <></>;
    }
    return (
      <ImageCard imageUri={item.uri} onPress={handleImagePress(item.id)} />
    );
  }
  useEffect(() => {
    updateUserLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      {allImages.length > 0 ? (
        <FlatList data={allImages} renderItem={renderImage} />
      ) : (
        <Text>
          No images yet. Add some images from your gallery or take some photos.
        </Text>
      )}
    </View>
  );
};

export default ImagesList;
