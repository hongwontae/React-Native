import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSymmary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    desc: "A pair of shoes",
    amount: 59.99,
    data: new Date("2024-01-30"),
  },
  {
    id: "e2",
    desc: "two pairs of shoes",
    amount: 159.99,
    data: new Date("2024-02-30"),
  },
  {
    id: "e3",
    desc: "three pairs of shoes",
    amount: 39.99,
    data: new Date("2024-03-30"),
  },
  {
    id: "e4",
    desc: "four pairs of shoes",
    amount: 25.99,
    data: new Date("2024-04-30"),
  },
  {
    id: "e5",
    desc: "Five pairs of shoes",
    amount: 63.99,
    data: new Date("2024-05-30"),
  },  {
    id: "e6",
    desc: "Five pairs of shoes",
    amount: 63.99,
    data: new Date("2024-05-30"),
  },  {
    id: "e7",
    desc: "Five pairs of shoes",
    amount: 63.99,
    data: new Date("2024-05-30"),
  },
  {
    id: "e8",
    desc: "Five pairs of shoes",
    amount: 63.99,
    data: new Date("2024-05-30"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <>
      <View style={styles.container}>
        <ExpensesSummary
          expenses={DUMMY_EXPENSES}
          periodName={expensesPeriod}
        ></ExpensesSummary>
        <ExpensesList expenses={DUMMY_EXPENSES}></ExpensesList>
      </View>
    </>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
    paddingHorizontal : 24,
    paddingTop : 24,
    paddingBottom : 0,
  },
});
