import AsyncStorage from '@react-native-async-storage/async-storage';
import {ImageType} from '../data/image.types';

export default function useManageAsyncStorage() {
  async function storeItem(image: ImageType) {
    try {
      const allKeys = await AsyncStorage.getAllKeys();
      if (allKeys.includes(image.id)) {
        return;
      }
      const jsonImage = JSON.stringify(image);
      await AsyncStorage.setItem(image.id, jsonImage);
    } catch (err) {
      console.log(err);
    }
  }

  async function getAllItems() {
    const allKeys = await AsyncStorage.getAllKeys();
    const itemsFetched = await AsyncStorage.multiGet(allKeys);
    const allItems = itemsFetched.map(item => {
      if (item[1] != null) {
        const currentItem = JSON.parse(item[1]);
        return currentItem as ImageType;
      }
    });
    return allItems;
  }

  async function removeItem(imageId: string) {
    try {
      await AsyncStorage.removeItem(imageId);
    } catch (err) {
      console.log(err);
    }
  }

  async function removeAllItems() {
    await AsyncStorage.clear();
  }
  return {storeItem, getAllItems, removeItem, removeAllItems};
}
