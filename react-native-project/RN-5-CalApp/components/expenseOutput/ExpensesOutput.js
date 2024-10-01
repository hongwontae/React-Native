import { StyleSheet, Text, View } from "react-native";
import {GlobalStyles} from '../../constants/styles'

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";


function ExpensesOutput({expensesPeriod, expenses, fallback}) {

  let content;

  if(expenses.length > 0){
    content =  <ExpensesList expenses={expenses}></ExpensesList>
  } else {
    content = <Text style={styles.fallbackText}>{fallback}</Text>
  }

  return (
    <>
      <View style={styles.container}>
        <ExpensesSummary periodName={expensesPeriod} expenses={expenses}></ExpensesSummary>
        {content}
      </View>
    </>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : GlobalStyles.colors.primary400,
        paddingHorizontal : 10,
    },
    fallbackText : {
      fontSize : 24,
      color : 'white',
      textAlign : 'center',
      marginTop : 20
    }
})
