import { View, Text, StyleSheet, Pressable } from "react-native";

function StartPage({navigation}) {

    function moveSepa(){
        navigation.navigate('SecondPage', {
          name : 'HWT Worrier',
          age : 100000000000,
          soccerYear : 2000
        });
    }

  return (
    <>
      <View style={styles.container}>
        <View>
          <Pressable onPress={moveSepa} style={({pressed})=>{
            return pressed ? styles.onPressEffect : null
          }}>
            <View style={styles.pressableTextContainer}>
              <Text>Click To Plan</Text>
            </View>
          </Pressable>
        </View>
        <View>
          <Text>This is Starting Page</Text>
        </View>
      </View>
    </>
  );
}

export default StartPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems : 'center',
  },
  pressableTextContainer : {
    width : 100,
    height : 100,
    justifyContent : 'center',
    backgroundColor : '#a1ff11',
    alignItems : 'center'
  },
  onPressEffect : {
    opacity : 0.1
  }
});
