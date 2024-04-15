import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreens from "./screens/CategoriesScreen";

export default function App() {
  return (
    <>
    <StatusBar style="light"></StatusBar>
      <CategoriesScreens></CategoriesScreens>
    </>
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
