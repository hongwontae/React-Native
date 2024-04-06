import { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

function GoalInput(props) {

  const [text, setText] = useState("");

  function goalInputHandler(enteredText) {
    setText(enteredText);
  }

  function clearAndSend(){
    props.onAddGoal(text);
    setText('')
  }


  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={goalInputHandler}
        style={styles.textInput}
        placeholder="Your course goal"
        value={text}
      ></TextInput>
      <Button title="Add Goal" onPress={clearAndSend}></Button>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
      },
      textInput: {
        borderColor: "#cccccc",
        borderWidth: 1,
        padding: 8,
        width: "70%",
        marginRight: 8,
      },
})
