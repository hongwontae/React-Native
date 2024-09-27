import { Pressable, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'

function IconButton({name, color, onPress}){

    return(
        <Pressable onPress={onPress} style={({pressed})=>{
            return pressed ? styles.pressed : null
        }}>
            <Ionicons name={name} color={color} size={24}></Ionicons>
        </Pressable>
    )
}

export default IconButton;

const styles = StyleSheet.create({
    pressed : {
        opacity : 0.7
    }
})