import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Hello!</Text>
          <Text>Hello!</Text>
          <Text>Hello!</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3a3a3a",
  },
  textContainer : {
    flexDirection : 'column',
    flex : 1,
  },
  text : {
    backgroundColor : 'red'
  }
});
