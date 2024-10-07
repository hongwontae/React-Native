import { useForegroundPermissions } from "expo-location";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import {Ionicons} from '@expo/vector-icons';

function LocationMap() {
  const [locationImage, setLocationImage] = useState();

  const [status, requestPermission] = useForegroundPermissions();

  function awaitAlert() {
    return new Promise((resolve, reject) => {
      Alert.alert(
        "권한이 없습니다.",
        "Okay를 누르시면 권한 요청, Cancel를 누르시면 취소됩니다.",
        [
          {
            text: "Okay",
            onPress: () => {
              resolve("success");
            },
          },
          {
            text: "Cancel",
            onPress: () => {
              reject("fail");
            },
          },
        ]
      );
    });
  }

  

  return (
    <>
      <View style={styles.locationContainer}>
        {locationImage ? (
          <Image style={styles.imageStyle}></Image>
        ) : (
          <Text style={styles.locationFallbackText}>Location Not Yet</Text>
        )}
      </View>
      <Pressable style={styles.locationPicker}>
        <Ionicons name="location" size={20} color='white'></Ionicons>
        <Text style={[{color : 'white'}]}>Location Picker</Text>
      </Pressable>
    </>
  );
}

export default LocationMap;

const styles = StyleSheet.create({
  locationContainer: {
    width: "90%",
    height: 200,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#50508C",
    borderRadius: 8,
    overflow: "hidden",
  },
  locationPicker: {
    width: "95%",
    margin: "auto",
    padding: 10,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
    backgroundColor: "#50508C",
    borderRadius: 8,
  },
  locationFallbackText: {
    color: "white",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
});
