import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another Way!</Text>
      </View>
      <Text
        style={{ marginTop: 20, marginBottom: 20, borderWidth: 2, padding: 10, borderColor : 'red' }}
      >
        Hello World!
      </Text>
      <Button title="Create Page!"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
