import { StyleSheet, View, Text } from "react-native";

function List({ title, subcontent }) {
  return (
    <>
      <View style={[{ alignItems: "center", marginBottom: 30 }]}>
        <Text style={styles.textDefault}>{title}</Text>
        <Text style={styles.textDefault}>{subcontent}</Text>
      </View>
    </>
  );
}

export default List;

const styles = StyleSheet.create({
    textDefault: {
        color: "white",
        fontSize: 20,
      },
})
