import { StyleSheet, Text, View } from "react-native";
import PressButton from "../components/PressButton";

function StartScreen({ route, navigation }) {
  function pressHandler() {
    navigation.navigate("detail-screen", {
      dummyData: {
        id : 1,
        name: "HWT",
        age: 30,
        description: "50bp 금리 인하 4년 만의 빅-컷",
        uri : 'https://img.sbs.co.kr/newimg/news/20230222/201754319_1280.jpg'
      },
    });
  }

  function bottomPressHandler(){
    navigation.navigate('testBottom')
  }

  return (
    <>
      <View style={styles.container}>
        <Text>Start Screen</Text>
        <PressButton press={pressHandler}>Move Detail</PressButton>
        <PressButton press={bottomPressHandler}>Move Bottom Tabs</PressButton>
      </View>
    </>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
