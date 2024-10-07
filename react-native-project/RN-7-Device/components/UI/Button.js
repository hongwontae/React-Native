import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/Colors";

function Button({onPress, children}){

    return(
        <>
            <Pressable onPress={onPress} style={({pressed})=>{
                return pressed ? [styles.button, styles.pressed] : styles.button
            }}>
                <Text style={styles.textStyle}>{children}</Text>
            </Pressable>
        </>
    )
}

export default Button;

const styles = StyleSheet.create({
    button : {
        paddingHorizontal : 12,
        paddingVertical : 8,
        margin : 6,
        backgroundColor : Colors.primary800,
        elevation : 2,
        shadowColor : 'black',
        shadowOffset : {width : 1, height : 1},
        shadowOpacity : 0.15,
        shadowRadius : 4,
        borderRadius : 8,
    },
    pressed : {
        opacity : 0.6
    },
    textStyle : {
        fontSize : 20,
        color : 'white',
        textAlign : 'center'
    }
})