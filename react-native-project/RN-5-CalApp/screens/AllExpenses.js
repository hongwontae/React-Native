import { Text } from "react-native";
import ExpensesOutput from "../components/expenseOutput/ExpensesOutput";
import { useContext } from "react";
import { ExCtx } from "../store/expenses-context";

function AllExpenses() {
  const { expenseState } = useContext(ExCtx);

  console.log('All Expenses')

  return (
    <>
      <ExpensesOutput
        expensesPeriod="Total"
        expenses={expenseState}
        fallback="현재 지출 내역이 없습니다."
      ></ExpensesOutput>
    </>
  );
}

export default AllExpenses;
