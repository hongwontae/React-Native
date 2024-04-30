import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpenseOutput/ExpensesOutput";

function AllExpenses(){

    return(
        <>
        <ExpensesOutput expensesPeriod="Total"></ExpensesOutput>
        </>
    )
}

export default AllExpenses;