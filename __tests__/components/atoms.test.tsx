import React from 'react';
import renderer from 'react-test-renderer';
import LoadMoreButton from '../../src/components/atoms/Buttons/LoadMoreButton';
import {render} from '@testing-library/react-native';

describe('LoadMoreButton', () => {
  it('LoadMoreButton should render correctly', () => {
    renderer.create(
      <LoadMoreButton
        onPress={() => console.log('Pressed')}
        isLoading={false}
        endReached={false}
      />,
    );
  });

  it('LoadMoreButton displays correct text on end reached', () => {
    const {getByRole} = render(
      <LoadMoreButton
        onPress={() => console.log('Pressed')}
        isLoading={false}
        endReached={true}
      />,
    );
    const textValue = getByRole('heading');
    expect(textValue.children[0]).toEqual('No more images to show');
  });
});
