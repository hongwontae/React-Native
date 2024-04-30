import { FlatList, Text } from "react-native";
import ExpensesItem from "./ExpensesItem";

function ExpensesList({ expenses }) {
  function renderItem(item) {
    return <ExpensesItem {...item.item}></ExpensesItem>
  }

  return (
    <>
      <FlatList
        data={expenses}
        renderItem={renderItem}
        keyExtractor={({ id }) => {
          return id;
        }}
      ></FlatList>
    </>
  );
}

export default ExpensesList;
