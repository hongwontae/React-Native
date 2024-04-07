import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal } from "react-native";

function GoalInput(props) {
  const [text, setText] = useState("");

  function textState(data){
    setText(data)
  }

  function textRegister(){
    props.onRe(text);
    setText('');
  }

  return (
    <Modal visible={props.visi}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Register your goal"
          value={text}
          onChangeText={textState}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <Button title="Add GOAL" onPress={textRegister}></Button>
          <Button title="Cancel" onPress={props.onDelete}></Button>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    padding: 16,
    alignItems : 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: "red",
    width: "90%",
    marginBottom : 10
  },
  buttonContainer : {
    flexDirection : 'row',
  }
});
