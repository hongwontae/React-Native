import { Alert, Image, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constants/Colors";
import {
  useForegroundPermissions,
  PermissionStatus,
  getCurrentPositionAsync,
} from "expo-location";
import { useEffect, useRef, useState } from "react";
import { map, reverseGeolocation } from "../../util/map";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";

function LocationPicker({ locationHandler }) {
  const route = useRoute();

  const isFocus = useIsFocused;

  const navigation = useNavigation();

  const [latLngLocation, latLngSetLocation] = useState(); // 위도와 경도
  const [currentLocation, setCurrentLocation] = useState(); // 요청 path

  const [locationInfo, requestPermission] = useForegroundPermissions();

  async function verifyPermission() {
    if (locationInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.status;
    }

    if (locationInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "접근 권한이 없습니다.",
        "Okay Button을 누르고 접근권한을 허용해주세요"
      );
      await requestPermission();
      return;
    }

    return true;
  }

  async function getLocationHandler() {
    const permission = await verifyPermission();
    if (!permission) {
      return;
    }
    const currentLo = await getCurrentPositionAsync();
    latLngSetLocation({
      lat: currentLo.coords.latitude,
      lng: currentLo.coords.longitude,
    });
    const currentLocation = map(
      currentLo.coords.latitude,
      currentLo.coords.longitude
    );

    setCurrentLocation(currentLocation);
  }

  function pickOnMapHandler() {
    navigation.navigate("Map");
  }

  let imageJSX;

  if (!currentLocation) {
    imageJSX = <Text style={style.imageFallbackText}>Image Not Yet</Text>;
  } else {
    imageJSX = (
      <Image style={style.imageStyle} source={{ uri: currentLocation }}></Image>
    );
  }

  useEffect(() => {
    if (isFocus && route.params) {
      const currentLocation = map(
        route.params.location.latitude,
        route.params.location.longitude
      );
      setCurrentLocation(currentLocation);
    }
  }, [isFocus, route]);

  useEffect(() => {
    async function saveFunction() {
      if (currentLocation) {
        const address = await reverseGeolocation(
          latLngLocation.lat,
          latLngLocation.lng
        );
        console.log(address['formatted_address'])

        locationHandler({
          location: latLngLocation,
          address: address['formatted_address'],
        });
      }
    }

    saveFunction();
  }, [currentLocation]);

  return (
    <>
      <View>
        <View style={style.container}>{imageJSX}</View>
        <View style={style.buttonContainer}>
          <OutlinedButton
            name="location"
            onPress={getLocationHandler}
            size={20}
            color={Colors.primary100}
          >
            Location User
          </OutlinedButton>
          <OutlinedButton
            name="map"
            onPress={pickOnMapHandler}
            size={20}
            color={Colors.primary100}
          >
            Pick on Map
          </OutlinedButton>
        </View>
      </View>
    </>
  );
}

export default LocationPicker;

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imageFallbackText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
});
