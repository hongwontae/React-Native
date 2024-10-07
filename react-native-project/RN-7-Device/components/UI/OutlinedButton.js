import { Pressable, StyleSheet, Text } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import { Colors } from "../../constants/Colors";

function OutlinedButton({onPress, children, name, size, color}){

    return(
        <>
            <Pressable onPress={onPress} style={({pressed})=>{
                return pressed ? [styles.pressed, styles.buttonContainer] : styles.buttonContainer
            }}>
                <Ionicons color={color} name={name} size={size}></Ionicons>
                <Text style={styles.textStyle}>{children}</Text>
            </Pressable>
        </>
    )
}

export default OutlinedButton;

const styles = StyleSheet.create({
    buttonContainer : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        borderWidth : 1,
        borderColor : Colors.primary400,
        marginVertical : 10,
        paddingVertical : 6,
        paddingHorizontal : 6,
        gap : 8
    },
    pressed : {
        opacity : 0.6
    },
    textStyle : {
        color : Colors.primary100
    }
})