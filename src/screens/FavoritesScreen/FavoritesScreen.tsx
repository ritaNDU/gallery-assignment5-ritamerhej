import {View, Text, ListRenderItemInfo} from 'react-native';
import React, {useEffect, useState} from 'react';
import useManageAsyncStorage from '../../hooks/useManageAsyncStorage';
import {ImageType} from '../../data/image.types';
import {FlatList} from 'react-native-gesture-handler';
import ImageCard from '../../components/molecules/ImageCard';

const FavoritesScreen = () => {
  const {getAllItems, removeItem} = useManageAsyncStorage();
  const [favoriteItems, setFavoriteItems] = useState<ImageType[]>([]);

  const handleRemoveItem = (imageId: string) => async () => {
    await removeItem(imageId);
  };
  function renderImages(itemData: ListRenderItemInfo<ImageType>) {
    if (itemData.item == null) {
      setFavoriteItems([]);
    }
    return (
      <ImageCard
        imageUri={itemData.item?.uri}
        onPress={handleRemoveItem(itemData.item?.id)}
      />
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
    <View>
      {favoriteItems.length > 0 ? (
        <>
          <FlatList data={favoriteItems} renderItem={renderImages} />
        </>
      ) : (
        <Text>
          No images yet. Long press on images to add them to your favorites.
        </Text>
      )}
    </View>
  );
};

export default FavoritesScreen;
