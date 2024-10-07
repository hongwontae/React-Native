import { StyleSheet, Text, TextInput, View } from "react-native";
import Title from "./Title";
import ImagePicker from "./ImagePicker";
import LocationMap from "./LocationMap";

function AddForm() {
  return (
    <>
      <View style={styles.allContainer}>
        <Title></Title>
        <ImagePicker></ImagePicker>
        <LocationMap></LocationMap>
      </View>
    </>
  );
}

export default AddForm;

const styles = StyleSheet.create({
    allContainer : {
        marginTop : 15
    }
})
