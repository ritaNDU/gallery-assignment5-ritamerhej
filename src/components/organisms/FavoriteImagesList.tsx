import {View, Text, FlatList, ListRenderItemInfo} from 'react-native';
import React from 'react';
import {ImageType} from '../../data/image.types';

type Props = {
  favoriteItems: ImageType[];
  renderImages: ({item}: ListRenderItemInfo<ImageType>) => React.JSX.Element;
};
const FavoriteImagesList = ({favoriteItems, renderImages}: Props) => {
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

export default FavoriteImagesList;
