import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import {useState} from 'react';

function Map({route, navigation}) {

    const [selectedMarker, setSelectedMarker] = useState({
        latitude : route.params?.lat,
        longitude : route.params?.lng,
        latitudeDelta : route.params?.delLat || 0,
        longitudeDelta : route.params?.delLng || 0
    });

    function selectLocationHandler(event){
        setSelectedMarker()
    }

  return (
    <>
      <MapView style={styles.mapContainer} region={{}}>
        {selectedMarker.latitude && <Marker  coordinate={selectedMarker}></Marker>}
      </MapView>
    </>
  );
}

export default Map;

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
});
