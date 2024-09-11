import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.addContainer}>
      <View style={styles.headerContainer}>
        <TextInput
          style={styles.textInputBoxStyle}
          placeholder="Your course goals"
        ></TextInput>
        <Button title="Add Goal"></Button>
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
      <View style={{flexDirection : 'column', gap : 4, width : 200, height : 100}}>
        <Text style={{borderWidth : 1, padding : 2}}>Hello</Text>
        <Text style={{borderWidth : 1, padding : 2}}>Hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addContainer: {
    padding: 50,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  textInputBoxStyle: {
    borderWidth: 2,
    width: "80%",
    padding: 4,
    borderColor: "#cccccc",
  },
});
