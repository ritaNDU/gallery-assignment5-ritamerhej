import axios from 'axios';
import {ImageType} from '../data/image.types';
import {Alert} from 'react-native';

const BASE_URL = 'https://65ff1f4bdf565f1a6144c62c.mockapi.io/api/';
export const LIMIT = 3;

export function storeImagesInApi(image: ImageType) {
  const imageToSend = {
    id: image.id,
    uri: image.uri,
    latitude: image.location.latitude,
    longitude: image.location.longitude,
  };
  axios
    .post(BASE_URL + 'images/', imageToSend)
    .catch(() =>
      Alert.alert("An error occured. Your image couldn't be stored properly."),
    );
}

export async function getImagesFromApi(page: string) {
  const url = new URL(BASE_URL + 'images');
  url.searchParams.append('page', page);
  url.searchParams.append('limit', JSON.stringify(LIMIT));
  const response = await axios
    .get(url.href)
    .catch(() =>
      Alert.alert(
        "Couldn't get data. Make sure you are connected to the internet and try again.",
      ),
    );
  const images: ImageType[] = [];
  if (response) {
    const data = response.data;

    for (const key in data) {
      const image: ImageType = {
        id: data[key].id,
        uri: data[key].uri,
        location: {
          latitude: data[key].latitude,
          longitude: data[key].longitude,
        },
      };
      images.push(image);
    }
  }
  return images;
}

export function deletePictureFromApi(imageId: string) {
  axios
    .delete(BASE_URL + `images/${imageId}`)
    .catch(() => Alert.alert("An error occured. Image couldn't be deleted."));
}
