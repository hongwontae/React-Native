import { Image, StyleSheet, Text, View } from "react-native";
import DetailInfo from "../components/DetailInfo";
import { useLayoutEffect } from "react";

function DetailScreen({ route, navigation }) {
  const id = route.params.dummyData.id;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.dummyData.description,
      headerStyle: {
        backgroundColor: "black",
      },
      headerTintColor: "white",
      headerTitleAlign: "center",
    });
  }, []);

  console.log(route.params.dummyData.uri);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyles}>NEWS - {id}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: route.params.dummyData.uri }}
            style={styles.imageStyle}
          ></Image>
        </View>

        <View style={styles.detailInfoStyle}>
          <DetailInfo
            name={route.params.dummyData.name}
            age={route.params.dummyData.age}
            description={route.params.dummyData.description}
          ></DetailInfo>
        </View>
      </View>
    </>
  );
}

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
  },
  imageStyle: {
    width: "100%",
    height : '100%',
    borderRadius: 10,
  },

  titleStyles: {
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
    marginTop: 30,
  },
  detailInfoStyle: {
    flex: 5,
  },
  imageContainer : {
    width : '90%',
    height : 250,
  }
});
