import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { data as arrData, flatData as flatArrData } from "./data/arr-data";

export default function App() {
  const [data, setData] = useState(false);
  const [flatData, setFlatData] = useState(false);

  function clickScrollHandler() {
    setData((prev) => !prev);
  }

  function clickFlatHnadler() {
    setFlatData((prev) => !prev);
  }

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View>
            <Text style={styles.textStyle}>Hello-World</Text>
          </View>
          <Button
            title="Scroll View - Show"
            onPress={clickScrollHandler}
          ></Button>
          <Button title="Flat List - Show" onPress={clickFlatHnadler}></Button>
        </View>
        {data ? (
          <View style={[styles.scrollContainer, { marginBottom: 20 }]}>
            <ScrollView>
              {arrData.map((ele) => {
                return (
                  <Text style={styles.textStyle} key={ele.id}>
                    {ele.title}
                  </Text>
                );
              })}
            </ScrollView>
          </View>
        ) : null}
        {flatData ? (
          <>
            <View style={[styles.flatContainer, {marginBottom : 20}]}>
              <FlatList
                data={flatArrData}
                renderItem={({ item }) => {
                  return <Text style={styles.textStyle}>{item.title}</Text>;
                }}
              ></FlatList>
            </View>
          </>
        ) : null}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e085a",
  },
  textStyle: {
    color: "white",
    fontSize: 30,
  },
  scrollContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatContainer : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  }
});
