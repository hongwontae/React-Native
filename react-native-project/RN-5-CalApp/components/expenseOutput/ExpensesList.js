import { FlatList } from "react-native-gesture-handler";

import ExpensesItem from "./ExpensesItem";

function ExpensesList({ expenses }) {
  return (
    <>
      <FlatList
        data={expenses}
        renderItem={({ item }) => {
          return <ExpensesItem {...item}></ExpensesItem>
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
      ></FlatList>
    </>
  );
}

export default ExpensesList;
