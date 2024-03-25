import {ListRenderItemInfo, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import useManageAsyncStorage from '../../hooks/useManageAsyncStorage';
import {ImageType} from '../../data/image.types';
import ImageCard from '../../components/molecules/ImageCard';
import FavoriteImagesList from '../../components/organisms/FavoriteImagesList';
import commonStyles from '../Common.styles';
import styles from './FavoritesScreen.styles';

const FavoritesScreen = () => {
  const {getAllItems, removeItem} = useManageAsyncStorage();
  const [favoriteItems, setFavoriteItems] = useState<ImageType[]>([]);

  const handleRemoveItem = (imageId: string) => async () => {
    await removeItem(imageId);
  };
  function renderImages({item}: ListRenderItemInfo<ImageType>) {
    if (item == null) {
      setFavoriteItems([]);
    }
    return (
      <ImageCard imageUri={item?.uri} onPress={handleRemoveItem(item?.id)} />
    );
  }

  useEffect(() => {
    async function getImages() {
      const allImages = (await getAllItems()) as ImageType[];
      setFavoriteItems(allImages);
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
