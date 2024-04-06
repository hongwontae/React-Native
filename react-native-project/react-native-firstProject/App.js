import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [goal, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setText(enteredText);
  }

  function buttonHandler() {
    setGoals((prevState) => {
      return [...prevState, text];
    });
    console.log(goal)
  }

  return (
    <View style={styles.addContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your course goal"
        ></TextInput>
        <Button title="Add Goal" onPress={buttonHandler}></Button>
      </View>
      <View style={styles.goalsContainer}>
        {goal.map((ele) => {
          return <Text key={ele}>{ele}</Text>;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 4,
  },
});
