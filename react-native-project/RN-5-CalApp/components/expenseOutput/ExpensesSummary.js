import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpensesSummary({ periodName, expenses }) {
  const sum = expenses.reduce((acc, ele) => {
    return acc + ele.amount;
  }, 0);

  return (
    <>
      <View style={styles.someContainer}>
        <View style={styles.container}>
          <Text style={styles.dateStyle}>{periodName}</Text>
          <Text style={styles.priceStyle}>${sum.toFixed(2)}</Text>
        </View>
      </View>
    </>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  someContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    margin: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.primary100,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  dateStyle : {
    fontSize : 16,
  },
  priceStyle : {
    fontSize : 16,
    fontWeight : 'bold'
  }
});
