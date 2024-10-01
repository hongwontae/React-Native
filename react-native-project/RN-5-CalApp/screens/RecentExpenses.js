import { Text } from "react-native";
import ExpensesOutput from "../components/expenseOutput/ExpensesOutput";
import { useContext } from "react";
import { ExCtx } from "../store/expenses-context";
import { getDataMinusDays } from "../util/FormatDate";

function RecentExpenses() {
  const expenseCtx = useContext(ExCtx);

  const recentExpenses = expenseCtx.expenseState.filter((ele) => {
    const today = new Date();
    const day7DaysAge = getDataMinusDays(today, 7);
    return ele.date > day7DaysAge;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallback="7일간 지출 내역이 없습니다."
    ></ExpensesOutput>
  );
}

export default RecentExpenses;
