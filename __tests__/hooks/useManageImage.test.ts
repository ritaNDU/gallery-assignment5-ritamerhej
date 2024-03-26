import {renderHook, act} from '@testing-library/react-native';
import useManageImages from '../../src/hooks/useManageImages';
import React from 'react';
import mockData from '../../src/data/mockData';

//Here we mocked the useContext hook from React so we can use it as normal
const useContextMock = jest.spyOn(React, 'useContext');

describe('useManageImages', () => {
  it('should call storeImages correctly', () => {
    //Here I mocked the dispatch function
    const dispatch = jest.fn();
    //Here I am setting the return value for the dispatch function
    useContextMock.mockReturnValue({imagesState: [], dispatch});

    //Here I mocked the hook
    const {result} = renderHook(() => useManageImages());

    //Here I am actually calling the hook with the dispatch action
    act(() => {
      result.current.storeImages([mockData[0]]);
    });
    //And I am checking if the dispatch function has been called correctly from the hook
    expect(dispatch).toHaveBeenCalledWith({
      type: 'storeImages',
      payload: {images: [mockData[0]]},
    });
  });

  //The rest of the tests are all the same
  it('should call addImages correctly', () => {
    const dispatch = jest.fn();
    useContextMock.mockReturnValue({imageState: [], dispatch});
    const {result} = renderHook(() => useManageImages());

    act(() => {
      result.current.addImages([mockData[0]]);
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: 'addImages',
      payload: {images: [mockData[0]]},
    });
  });

  it('should call removeImages correctly', () => {
    const dispatch = jest.fn();
    useContextMock.mockReturnValue({imageState: [], dispatch});
    const {result} = renderHook(() => useManageImages());

    act(() => {
      result.current.removeImage(mockData[0].id);
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: 'removeImage',
      payload: {imageId: mockData[0].id},
    });
  });
});
