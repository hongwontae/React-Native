import { Pressable, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'

function IconButton({name, size, color, onPress}){
    return(
        <>
            <Pressable style={({pressed})=>{
                return pressed ? [styles.pressed, styles.container] : styles.container
            }} onPress={onPress}>
                <Ionicons name={name} size={size} color={color}></Ionicons>
            </Pressable>
        </>
    )
}

export default IconButton;

const styles = StyleSheet.create({
    container : {
        padding : 8,
        alignItems : 'center',
        justifyContent : 'center'
    },
    pressed : {
        opacity : 0.7
    }
})