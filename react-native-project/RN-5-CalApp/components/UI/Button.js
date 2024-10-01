import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Button({children, mode, onPress, style}) {
  return (
    <>
      <View style={style}>
        <Pressable onPress={onPress} style={({pressed})=>{
            return pressed ? styles.pressed : null
        }}>
          <View style={[styles.button, mode === 'flat' && styles.flat]}>
            <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
}

export default Button;

const styles = StyleSheet.create({
    pressed : {
        opacity : 0.4,
        backgroundColor : GlobalStyles.colors.primary100,
        borderRadius : 4
    },
    flat : {
        backgroundColor : 'transparent'
    },
    button : {
        borderRadius : 4,
        padding : 8,
        backgroundColor : GlobalStyles.colors.accent500,
    },
    buttonText : {
        color : 'white',
        textAlign : 'center'
    },
    flatText : {
        color : GlobalStyles.colors.primary200
    }
})
