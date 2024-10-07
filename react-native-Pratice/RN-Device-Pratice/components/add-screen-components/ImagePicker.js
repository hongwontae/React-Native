import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function    ImagePicker() {
  const [image, setImage] = useState();
  const [status, requestPermission] = useCameraPermissions();

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

  async function getPermission() {
    if (status.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (status.status === PermissionStatus.DENIED) {
      try {
        const alertValue = await awaitAlert();

        if (alertValue === "success") {
          const perRes = await requestPermission();
          return perRes.granted;
        }
      } catch (error) {
        console.log(error);
        return;
      }

      return;
    }
    return true;
  }

  async function imageClickHandler({ pass }) {
    if (!pass) {
      const permission = await getPermission();
      if (!permission) {
        return;
      }
    }

    const result = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    if (!result.assets) {
      console.log("reject");
      return;
    }
    setImage(result.assets[0].uri);
  }

  return (
    <>
      <View style={styles.imageContainer}>
        {image ? (
          <Image style={styles.imageStyle} source={{ uri: image }}></Image>
        ) : (
          <Text style={styles.imageFallback}>Image Not Yet</Text>
        )}
      </View>
      <Pressable style={styles.imagePicker} onPress={imageClickHandler}>
        <Ionicons name="camera" size={20} color="white"></Ionicons>
        <Text style={styles.imagePickerText}>Image Picker</Text>
      </Pressable>
    </>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePicker: {
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
  imagePickerText: {
    color: "white",
  },
  imageContainer: {
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
  imageFallback: {
    color: "white",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
});
