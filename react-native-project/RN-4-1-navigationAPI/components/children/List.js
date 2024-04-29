import { Text, StyleSheet, View } from "react-native";

function List({ data }) {
  return (
    <>
      {data.map((ele, idx, arr) => {
        return (
          <View key={ele} style={styles.listItem}>
            <Text style={styles.listText}>{ele}</Text>
          </View>
        );
      })}
    </>
  );
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 8,
    paddingHorizontal : 8,
    paddingVertical : 4,
    marginVertical : 4,
    marginHorizontal : 12,
    backgroundColor : '#e2b497'
  },
  listText : {
    color : '#351401',
    textAlign : 'center'
  }
});
