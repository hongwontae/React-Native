import { useLayoutEffect, useState } from "react";
import { StyleSheet, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/UI/IconButton";

function Map({ route, navigation }) {
  const [selectedMarker, setSelectedMarker] = useState();
  

  function mapSelectHandler(event) {
    setSelectedMarker({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
  }


  function savePickedLocationHandler() {
    if(!selectedMarker){
        Alert.alert('Marker를 지정해야 합니다.', '마커가 지정되지 않으면 위치를 식별하기 어렵습니다.');
        return;
    }

    navigation.navigate('Add-Places',{location : selectedMarker});
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => {
        return (
          <IconButton
            color={tintColor}
            name="save"
            size={24}
            onPress={savePickedLocationHandler}
          ></IconButton>
        );
      },
    });
  }, [navigation, savePickedLocationHandler]);

  return (
    <>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 37.73,
          longitude: -122.43,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={mapSelectHandler}
      >
        {selectedMarker && <Marker coordinate={selectedMarker}></Marker>}
      </MapView>
    </>
  );
}

export default Map;

const styles = StyleSheet.create({
  mapStyle: {
    flex: 1,
  },
});
