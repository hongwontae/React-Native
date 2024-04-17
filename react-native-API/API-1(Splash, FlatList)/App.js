import { StyleSheet, FlatList, View, Text } from "react-native";
import { data } from "./data/dummy-data";
import RenderCom from "./components/RenderCom";

export default function App() {
  console.log(data);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.viewTaniner}>
          <Text style={styles.textDeco}>{data[1].name}</Text>
        </View>
        <View style={styles.viewTaniner}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => item.id}
            renderItem={({item})=>{
              return(
                <RenderCom title={item.name}></RenderCom>
              )
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewTaniner: {
    flex: 1,
    backgroundColor: "gray",
  },
  textDeco: {
    color: "red",
    textAlign: "center",
    marginTop: 40,
    fontSize: 40,
  },
});
