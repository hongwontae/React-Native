import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/Colors";
import Title from "../components/Title";
import Card from "../components/Card";

function StartGameScreen({ onNumber }) {
  const [enteredText, setEnteredText] = useState("");

  function absorbTextHandler(text) {
    setEnteredText(text);
  }

  function resetHandler() {
    setEnteredText("");
  }

  function confirmHandler() {
    if (isNaN(+enteredText) || +enteredText <= 0 || +enteredText > 99) {
      Alert.alert("Invalid Number or Text", "Correct Input Data Give me", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }

    console.log("valid Data");

    onNumber(enteredText);
  }

  return (
    <>
      <View style={styles.rootContaienr}>
        <Title>Guess My Number</Title>
        <Card>
          <Text style={styles.instructionText}>Enter a Number</Text>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={absorbTextHandler}
            value={enteredText}
          ></TextInput>
          <View style={styles.buttonContainer}>
            <View style={styles.singleButtonContainer}>
              <PrimaryButton onPress={resetHandler}>Rest</PrimaryButton>
            </View>
            <View style={styles.singleButtonContainer}>
              <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({

  rootContaienr : {
    flex : 1,
    marginTop : 100,
    alignItems : 'center'
  },  
  instructionText : {
    color : Colors.accent500,
    fontSize : 24
  },
  numberInput: {
    width: 50,
    height: 50,
    color: Colors.accent500,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 32,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  singleButtonContainer: {
    flex: 1,
  },
});

// shadow style
// 1. android는 elevation을 사용해서 숫자로 값을 넣어주면 그림자가 반영된다.
// 2. ios는 elevation style이 적용되지 않는다.
// => shadowColor, shadowOffst...
// elevation은 안드로이드만, shadow로 시작하는 props는 ios만 적용한다.
