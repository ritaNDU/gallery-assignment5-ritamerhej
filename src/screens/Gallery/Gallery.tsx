import {View, Pressable, ListRenderItemInfo, Image} from 'react-native';
import React, {useContext} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {ImageType} from '../../data/image.types';
import {AppContextType, ImagesContext} from '../../store/ImagesContextProvider';

function keyExtractor(image: ImageType) {
  return image.id;
}

const Gallery = () => {
  const {imagesState} = useContext(ImagesContext) as AppContextType;
  function renderImage({item}: ListRenderItemInfo<ImageType>) {
    return (
      <Pressable>
        <Image source={{uri: item.id}} />
      </Pressable>
    );
  }
  return (
    <View>
      <FlatList
        data={imagesState.allImages}
        keyExtractor={keyExtractor}
        renderItem={renderImage}
      />
    </View>
  );
};

export default Gallery;
