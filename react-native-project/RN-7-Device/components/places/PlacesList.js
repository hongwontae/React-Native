import { FlatList, StyleSheet, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";

function PlacesList({ places }) {


  if (!places || places?.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>현재 저장된 장소가 없습니다.</Text>
      </View>
    );
  }


  return (
    <>
      <FlatList
        style={styles.list}
        data={places}
        keyExtractor={({ id }) => {
          return id;
        }}
        renderItem={({ item }) => {
          return <PlaceItem place={item}></PlaceItem>;
        }}
      ></FlatList>
    </>
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 20,
    color : 'white'
  },
  list : {
    margin : 24
  }
});
