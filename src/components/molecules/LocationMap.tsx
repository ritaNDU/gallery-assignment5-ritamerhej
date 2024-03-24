import {View} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {LocationType} from '../../data/image.types';
import styles from './molecules.styles';

type Props = {
  location: LocationType;
};
const LocationMap = ({location}: Props) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        <Marker coordinate={location} />
      </MapView>
    </View>
  );
};

export default LocationMap;
