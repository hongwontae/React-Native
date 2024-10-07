import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

function IconButton({ name, size, color, onPress }) {
  return (
    <>
      <Pressable style={({pressed})=>{
        return pressed ? styles.pressed : null
      }} onPress={onPress}>
        <Ionicons name={name} size={size} color={color}></Ionicons>
      </Pressable>
    </>
  );
}

export default IconButton;

const styles = StyleSheet.create({
    pressed : {
        opacity : 0.6,
        backgroundColor : 'white',
        borderRadius : 8
    }
})
