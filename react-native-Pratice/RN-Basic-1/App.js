import { StatusBar } from "expo-status-bar";
import StartGameScreen from "./screens/StartGameScreen";
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <LinearGradient colors={["#ee2244", "#ddb52f"]} style={styles.container}>
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.imageContainer}
        >
          <StartGameScreen></StartGameScreen>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer : {
    opacity : 0.25
  }
});
