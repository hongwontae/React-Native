import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({onPress, name, size, color}) {
  return (
    <>
      <Pressable onPress={onPress} style={({pressed})=>{
        return pressed && styles.pressed
      }}>
        <Ionicons name={name} size={size} color={color}></Ionicons>
      </Pressable>
    </>
  );
}

export default IconButton;

const styles = StyleSheet.create({
    pressed : {
        opacity : 0.7,
    }
})
