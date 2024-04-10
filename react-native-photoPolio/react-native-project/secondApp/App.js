import { StyleSheet, View, StatusBar } from "react-native";
import AppStart from "./components/AppStart";
import { useState } from "react";
import Information from "./components/Information";

export default function App() {
  const [title, setTitle] = useState("");

  function clickPicture(text) {
    setTitle(text);
  }

  let content;

  if (title === "Shankly") {
    content = (
      <>
        <Information name='Shankly'>Shankly</Information>
      </>
    );
  }

  if (title === "Paisley") {
    content = (
      <>
        <Information name='Paisley'>Paisley</Information>
      </>
    )
  }

  return (
    <>
      <StatusBar barStyle="dark-content"></StatusBar>
      <View style={styles.totalContainer}>
        <AppStart onClick={clickPicture}></AppStart>
        <View>
        {content}
      </View>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  totalContainer: {
    flex: 1,
    backgroundColor: "#e52a3c",
    alignItems: "center",
  },
});
