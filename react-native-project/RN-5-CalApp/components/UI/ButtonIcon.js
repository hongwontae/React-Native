import { Pressable, StyleSheet, View } from "react-native";
import {Ionicons} from '@expo/vector-icons'

function ButtonIcon({name, color, size, onPress}){

    return(
        <Pressable onPress={onPress} style={({pressed})=>{
            return pressed ? styles.pressed : null
        }}>
            <View style={styles.buttonContainer}>
                <Ionicons name={name} color={color} size={size}></Ionicons>
            </View>
        </Pressable>
    )
}

export default ButtonIcon;

const styles = StyleSheet.create({
    buttonContainer : {
        margin : 8,
        padding : 6,
        borderRadius : 20,
        backgroundColor : 'black'
    },
    pressed : {
        opacity : 0.7
    },

})