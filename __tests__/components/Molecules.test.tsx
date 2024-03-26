import React from 'react';
import renderer from 'react-test-renderer';
import FavoriteImageCard from '../../src/components/molecules/FavoriteImagesCard';
import mockData from '../../src/data/mockData';

it('FavoriteImageCard renders correctly', () => {
  renderer.create(<FavoriteImageCard imageUri={mockData[0].uri} />);
});
