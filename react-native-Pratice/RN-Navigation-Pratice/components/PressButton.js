import { Pressable, StyleSheet, Text, View } from "react-native";

function PressButton({press}) {
  return (
    <>
      <View >
        <Pressable style={styles.container} onPress={press} android_ripple={{color : 'white'}}>
            <Text>Move One</Text>
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
        overflow : 'hidden'
    }
})
