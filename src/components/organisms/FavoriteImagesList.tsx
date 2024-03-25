import {View, Text, FlatList, ListRenderItemInfo} from 'react-native';
import React from 'react';
import {ImageType} from '../../data/image.types';
import styles from './organisms.style';

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
        <Text style={styles.noImagesText}>No images yet...</Text>
      )}
    </View>
  );
};

export default FavoriteImagesList;
