import { Pressable, StyleSheet, Text, View } from "react-native";

function PressButton({press, children}) {
  return (
    <>
      <View >
        <Pressable style={styles.container} onPress={press} android_ripple={{color : 'white'}}>
            <Text style={styles.textStyle}>{children}</Text>
        </Pressable>
      </View>
    </>
  );
}

export default PressButton;

const styles = StyleSheet.create({
    container : {
        borderWidth : 2,
        padding : 10,
        backgroundColor : 'red',
        overflow : 'hidden',
    },
    textStyle : {
      textAlign : 'center'
    }
})
