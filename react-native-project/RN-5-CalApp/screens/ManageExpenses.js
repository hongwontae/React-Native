import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/styles";
import { ExCtx } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

function ManageExpenses({ route, navigation }) {
  const { deleteItem, updateItem, addItem, expenseState } = useContext(ExCtx);
  const id = route?.params?.expId;

  const bolId = !!id;

  const selectedItem = expenseState.find((ele)=>{
    return ele.id === id
  })

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: bolId ? "Edit Expense" : "Add Expense",
    });
  }, [bolId, navigation]);

  function cancelHandler() {
    navigation.goBack();
  }

  function removeHandler() {
    deleteItem(id);
    navigation.goBack();
  }

  function confirmHandler(expenseData) {
    if (bolId) {
      updateItem(id,expenseData);
    } else {
      addItem(expenseData);
    }
    navigation.goBack();
  }

  return (
    <>
      <View style={styles.container}>
        <ExpenseForm
        defaultValues={selectedItem}
          onCancel={cancelHandler}
          submitButtonLabel={bolId ? "Update" : "Add"}
          onSubmit={confirmHandler}
        ></ExpenseForm>
        {bolId && (
          <View style={styles.deleteContainer}>
            <Ionicons
              onPress={removeHandler}
              name="trash"
              size={36}
              color="red"
            ></Ionicons>
          </View>
        )}
      </View>
    </>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary400,
    padding: 8,
  },

  deleteContainer: {
    borderTopWidth: 2,
    margin: 20,
    padding: 10,
    borderColor: "white",
    alignItems: "center",
  },
});
