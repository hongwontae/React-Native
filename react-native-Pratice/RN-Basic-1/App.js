import { StatusBar } from "expo-status-bar";
import StartGameScreen from "./screens/StartGameScreen";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);

  const [fontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();

      if (fontLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, [fontLoaded]);

  function gameOverHandler() {
    setGameIsOver(true);
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  let screen = (
    <StartGameScreen onNumber={pickedNumberHandler}></StartGameScreen>
  );

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
      ></GameScreen>
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen></GameOverScreen>;
  }

  return (
    <>
      <StatusBar style="auto" />
      <LinearGradient
        colors={[Colors.primary500, Colors.accent500]}
        style={styles.container}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.imageContainer}
        >
          <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    opacity: 0.25,
  },
});
