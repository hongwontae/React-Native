import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal, Image } from "react-native";

function GoalInput({ goalHandler, visible, noneVisible }) {
  const [enteredText, setEnteredText] = useState("");

  function textInputHandler(text) {
    setEnteredText(text);
  }

  return (
    <>
      <Modal visible={visible} animationType="slide">
        <View style={styles.headerContainer}>
        <Image style={styles.imageCss} source={require('../assets/images/goal.png')}></Image>
          <TextInput
            style={styles.textInputBoxStyle}
            placeholder="Your course goals"
            onChangeText={textInputHandler}
            value={enteredText}
          ></TextInput>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => {
                goalHandler(enteredText);
                setEnteredText("");
                noneVisible();
              }}
              title="Add Goal"
            ></Button>
            <Button title="Cancel" onPress={noneVisible}></Button>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "flex-start",
    gap: 8,
    alignItems: "center",
    flex: 1,
    backgroundColor : '#311b6b',
    paddingVertical : 100
  },
  imageCss : {
    width : 150,
    height : 150,
    margin : 10
  },
  textInputBoxStyle: {
    borderWidth: 2,
    borderRadius : 20,
    width: "70%",
    padding: 6,
    borderColor: "#cccccc",
    marginRight: 8,
    backgroundColor : '#e4d0ff'
  },
  buttonContainer: {
    flexDirection: "row",
    gap : 10
  },
});
