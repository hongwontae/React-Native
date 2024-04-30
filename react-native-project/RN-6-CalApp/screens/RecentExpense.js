import { Text, View } from "react-native";
import ExpensesOutput from "../components/ExpenseOutput/ExpensesOutput";

function RecentExpense() {
  return (
    <>
      <ExpensesOutput expensesPeriod='Last 7 Days'></ExpensesOutput>
    </>
  );
}

export default RecentExpense;
