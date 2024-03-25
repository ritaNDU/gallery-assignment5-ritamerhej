import {ListRenderItemInfo} from 'react-native';
import React, {useEffect, useState} from 'react';
import useManageAsyncStorage from '../../hooks/useManageAsyncStorage';
import {ImageType} from '../../data/image.types';
import ImageCard from '../../components/molecules/ImageCard';
import FavoriteImagesList from '../../components/organisms/FavoriteImagesList';

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
    <FavoriteImagesList
      favoriteItems={favoriteItems}
      renderImages={renderImages}
    />
  );
};

export default FavoritesScreen;
