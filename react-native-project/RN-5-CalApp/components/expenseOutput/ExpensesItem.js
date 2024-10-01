import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { formatDate } from "../../util/FormatDate";
import { useNavigation } from "@react-navigation/native";

function ExpensesItem({ description, date, amount, id }) {
  const realDate = formatDate(date);

  const navigation = useNavigation();

  function pressHandler() {
    navigation.navigate("ManageExpense", {
      expId : id
    });
  }

  return (
    <>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) => {
          return pressed ? styles.pressed : null;
        }}
      >
        <View style={styles.container}>
          <View>
            <Text style={[styles.textBase, styles.description]}>
              {description}
            </Text>
            <Text style={styles.textBase}>{realDate.toString()}</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>{amount}</Text>
          </View>
        </View>
      </Pressable>
    </>
  );
}

export default ExpensesItem;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary200,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 8,
    marginHorizontal: 20,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
