import { StyleSheet, Text, View } from "react-native";
import Input from "../UI/Input";
import { useState } from "react";
import Button from "../UI/Button";

function ExpenseForm({ onCancel, submitButtonLabel, onSubmit, defaultValues }) {
  const [inputData, setInputData] = useState({
    amount: defaultValues ? defaultValues.amount.toString() : "",
    date: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : "",
    description: defaultValues ? defaultValues.description : "",
  });

  function inputHandler(identifier, value) {
    setInputData((prev) => {
      return {
        ...prev,
        [identifier]: value,
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputData.amount,
      date: new Date(inputData.date),
      description: inputData.description,
    };

    onSubmit(expenseData);
  }

  return (
    <>
      <View>
        <Text style={styles.title}>My Expense</Text>
        <View style={styles.inputPosition}>
          <Input
            onChange={inputHandler.bind(null, "amount")}
            style={styles.rowInput}
            label="Amount"
            textInputConfig={{
              keyboardType: "decimal-pad",
            }}
            value={inputData.amount}
          ></Input>
          <Input
            onChange={inputHandler.bind(null, "date")}
            style={styles.rowInput}
            label="Date"
            textInputConfig={{ placeholder: "YYYY-MM-DD", maxLength: 10 }}
            value={inputData.date}
          ></Input>
        </View>

        <Input
          onChange={inputHandler.bind(null, "description")}
          label="Description"
          textInputConfig={{ multiline: true }}
          value={inputData.description}
        ></Input>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} mode="flat" onPress={onCancel}>
            Cancel
          </Button>
          <Button style={styles.button} onPress={submitHandler}>
            {submitButtonLabel}
          </Button>
        </View>
      </View>
    </>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  inputPosition: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
