import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen({getNum}) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(text) {
    setEnteredNumber(text);
  }

  function resetLogic(){
    setEnteredNumber('')
  }

  function confirmInputHandler() {
    const validData = parseInt(enteredNumber);

    if (isNaN(validData) || validData <= 0 || validData > 99) {
      Alert.alert("Invaild Number", "Number has to be a between 1 and 99", 
      [{text : 'Okay', style : 'destructive', onPress : resetLogic}]);
      return;
    }
    getNum(enteredNumber)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      ></TextInput>
      <View style={styles.twoButtonContainer}>
        <View style={styles.oneButtonContainer}>
          <PrimaryButton onPress={resetLogic}>Reset</PrimaryButton>
        </View>
        <View style={styles.oneButtonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    backgroundColor: "#4e0329",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  twoButtonContainer: {
    flexDirection: "row",
  },
  oneButtonContainer: {
    flex: 1,
  },
});
