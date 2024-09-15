import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen() {
  const [enteredText, setEnteredText] = useState("");

  function absorbTextHandler(text) {
    setEnteredText(text);
  }

  function resetHandler(){
    setEnteredText('')
  }

  function confirmHandler() {
    if(isNaN(+enteredText) || +enteredText <= 0 || +enteredText > 99){
      Alert.alert('Invalid Number or Text', 'Correct Input Data Give me', 
        [{text : 'Okay', style : 'destructive', onPress : resetHandler}]
      )
    }

    console.log('valid Data');
  }



  return (
    <>
      <View style={styles.inputContainer}>
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
      </View>
    </>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    backgroundColor: "#4e0329",
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
    gap: 4,
  },
  numberInput: {
    width: 50,
    height: 50,
    color: "#ddb52f",
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
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
