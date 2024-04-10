import { View, Text, StyleSheet, Image, Pressable } from "react-native";

function AppStart({onClick}) {

    function setTitle1(){
        onClick('Shankly')
    }

    function setTitle2(){
        onClick('Paisley')
    }

  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.titleSt}>This is Anfiled</Text>
      </View>
      <View style={styles.imageContainer}>
        <Pressable style={[styles.PressableC]} onPress={setTitle1}>
          <Image
            style={styles.image}
            source={require("../assets/images/cli.png")}
            resizeMode="contain"
          ></Image>
        </Pressable>

        <Pressable style={styles.PressableC} onPress={setTitle2}>
          <Image
            style={styles.image}
            source={require("../assets/images/pez.png")}
          ></Image>
        </Pressable>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>William Shankly, OBE</Text>
        <Text style={styles.titleText}>Robert Paisley, OBE</Text>
      </View>
    </>
  );
}

export default AppStart;

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 60,
    color: "red",
    borderWidth: 3,
    borderRadius: 10,
    width: 300,
  },
  titleSt: {
    textAlign: "center",
    fontSize: 30,
  },
  imageContainer: {
    marginTop: 40,
    width: 200,
    height: 200,
    flexDirection: "row",
    position: "relative",
    right: 100,
  },
  image: {
    width: "90%",
    height: "90%",
    marginHorizontal: 10,
  },
  textContainer: {
    flexDirection: "row",
  },
  titleText: {
    marginHorizontal: 20,
    fontSize: 18,
  },
  PressableC : {
    width : '100%',
    height : '100%'
  }
});
