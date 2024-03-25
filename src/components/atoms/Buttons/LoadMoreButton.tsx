import {Text, ActivityIndicator} from 'react-native';
import React from 'react';
import ButtonTemplate from './ButtonsTemplate';
import styles from './Buttons.styles';
import theme from '../../../styles/theme';

type Props = {
  onPress: () => void;
  isLoading: boolean;
  endReached: boolean;
};

const LoadMoreButton = ({onPress, isLoading, endReached}: Props) => {
  return (
    <ButtonTemplate onPress={onPress} style={styles.loadMoreButton}>
      <Text style={styles.loadMoreText}>
        {isLoading ? (
          <ActivityIndicator size={30} color={theme.colors.backgroundColor} />
        ) : endReached ? (
          'No more images to show'
        ) : (
          'Load More'
        )}
      </Text>
    </ButtonTemplate>
  );
};

export default LoadMoreButton;
