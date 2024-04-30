import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

import List from "./custom/List";

import { data } from "./data/ListData";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.totalcontainer}>
        <View style={styles.titleInnerContainer}>
          <View style={styles.titleBorderContainer}>
            <Text style={[styles.textDefault, styles.title]}>
              React-Native-Learning
            </Text>
          </View>
          <View style={{position : 'relative', top : 65,}}>
            <Text style={[styles.textDefault, {color : 'red', fontSize : 22}]}>Section Click and Go Details</Text>
          </View>
        </View>

        <View style={{flex:2}}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            renderItem={({ item }) => {
              return (
                <>
                  <List title={item.title} subcontent={item.content}></List>
                </>
              );
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  totalcontainer: {
    flex: 1,
    backgroundColor: "#3a3a3a",
  },
  titleInnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleBorderContainer: {
    borderWidth: 2,
    width: "90%",
    borderRadius: 15,
    borderColor: "#7ba",
  },

  textDefault: {
    color: "white",
    fontSize: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 35,
    position: "relative",
  },
});
