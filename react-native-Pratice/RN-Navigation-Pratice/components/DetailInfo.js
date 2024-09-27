import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

function DetailInfo({ name, age, description }) {
  return (
    <>
      <View style={styles.infoContainer}>
        <Text style={styles.textStyle}>Author - {name}</Text>
        <Text style={styles.textStyle}>Age - {age}</Text>
      </View>
      <Text style={styles.textStyle}>{description}</Text>
    </>
  );
}

export default DetailInfo;

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
});
