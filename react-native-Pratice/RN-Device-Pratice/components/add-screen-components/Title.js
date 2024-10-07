import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

function Title() {
  const [inputTitle, setInputTitle] = useState(null);

  function titleHandler(text) {
    setInputTitle(text);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>To Do</Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={titleHandler}
          placeholder="To Do"
        ></TextInput>
      </View>
    </>
  );
}

export default Title;

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  titleStyle: {
    fontFamily: "Merriweather_700Bold",
    textAlign: "center",
    fontSize: 20,
  },
  textInputStyle: {
    borderColor: "black",
    borderWidth: 1,
    margin: "auto",
    width: "80%",
    padding: 2,
    textAlign: "center",
    fontSize: 20,
  },
});
