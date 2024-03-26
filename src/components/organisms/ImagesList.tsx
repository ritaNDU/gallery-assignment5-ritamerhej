import {View, FlatList, ListRenderItemInfo, Text} from 'react-native';
import React, {useContext} from 'react';
import {AppContextType, ImagesContext} from '../../store/ImagesContextProvider';
import ImageCard from '../molecules/ImageCard';
import {ImageType} from '../../data/image.types';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorNavigationProps} from '../../navigation/MainNavigator.types';
import {LIMIT} from '../../service/api';
import styles from './organisms.style';
import LoadMoreButton from '../atoms/Buttons/LoadMoreButton';
import useManageImagesFetching from '../../hooks/useManageImagesFetching';

const ImagesList = () => {
  const navigation = useNavigation<MainNavigatorNavigationProps>();
  const {imagesState} = useContext(ImagesContext) as AppContextType;
  const {endReached, isLoading, refresh, handleLoadMore, handleRefresh} =
    useManageImagesFetching();

  const pageToFetch =
    imagesState.allImages.length >= 3
      ? imagesState.allImages.length / LIMIT + 1
      : 1;

  const handleImagePress = (imageId: string) => () => {
    navigation.navigate('ImageDetailsScreen', {imageId: imageId});
  };

  function renderImage({item}: ListRenderItemInfo<ImageType>) {
    if (item == null) {
      return <></>;
    }

    return (
      <View>
        <ImageCard
          imageUri={item.uri}
          onPress={handleImagePress(item.id)}
          imageId={item.id}
        />
      </View>
    );
  }

  return (
    <View>
      {imagesState.allImages.length > 0 ? (
        <FlatList
          data={imagesState.allImages}
          renderItem={renderImage}
          ListFooterComponent={
            <LoadMoreButton
              onPress={handleLoadMore(JSON.stringify(pageToFetch))}
              endReached={endReached}
              isLoading={isLoading}
            />
          }
          refreshing={refresh}
          onRefresh={handleRefresh}
          nestedScrollEnabled={false}
        />
      ) : (
        <Text style={styles.noImagesText}>No images yet...</Text>
      )}
    </View>
  );
};

export default ImagesList;
