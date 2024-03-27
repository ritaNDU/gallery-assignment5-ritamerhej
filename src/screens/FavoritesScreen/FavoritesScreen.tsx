import {ListRenderItemInfo, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import useManageAsyncStorage from '../../hooks/useManageAsyncStorage';
import {ImageType} from '../../data/image.types';
import FavoriteImagesList from '../../components/organisms/FavoriteImagesList';
import commonStyles from '../Common.styles';
import styles from './FavoritesScreen.styles';
import FavoriteImageCard from '../../components/molecules/FavoriteImagesCard';
import {sortByDistance} from '../../utils/locationUtils';
import useManageUserLocation from '../../hooks/useManageUserLocation';

const FavoritesScreen = () => {
  const {getAllItems, removeItem} = useManageAsyncStorage();
  const [favoriteItems, setFavoriteItems] = useState<ImageType[]>([]);
  const {currentLocation} = useManageUserLocation();

  const handleRemoveItem = (imageId: string) => async () => {
    await removeItem(imageId);
  };
  function renderImages({item}: ListRenderItemInfo<ImageType>) {
    return (
      item && (
        <FavoriteImageCard
          imageUri={item?.uri}
          onPress={handleRemoveItem(item?.id)}
        />
      )
    );
  }

  useEffect(() => {
    async function getImages() {
      const allImages = (await getAllItems()) as ImageType[];
      const sortedImages = sortByDistance(allImages, currentLocation);
      setFavoriteItems(sortedImages);
    }
    getImages();
  });

  return (
    <View style={[commonStyles.container, styles.container]}>
      <FavoriteImagesList
        favoriteItems={favoriteItems}
        renderImages={renderImages}
      />
    </View>
  );
};

export default FavoritesScreen;
