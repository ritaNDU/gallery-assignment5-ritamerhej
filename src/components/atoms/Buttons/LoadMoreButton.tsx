import {Text, ActivityIndicator, Pressable} from 'react-native';
import React from 'react';
import styles from './Buttons.styles';
import theme from '../../../styles/theme';

type Props = {
  onPress: () => void;
  isLoading: boolean;
  endReached: boolean;
};

const LoadMoreButton = ({onPress, isLoading, endReached}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.loadMoreButton}>
      <Text role={'heading'} style={styles.loadMoreText}>
        {isLoading ? (
          <ActivityIndicator size={30} color={theme.colors.backgroundColor} />
        ) : endReached ? (
          'No more images to show'
        ) : (
          'Load More'
        )}
      </Text>
    </Pressable>
  );
};

export default LoadMoreButton;
