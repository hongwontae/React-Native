import { Ionicons } from "@expo/vector-icons";

function IconButton({name, size, color}) {
  return (
    <>
      <Ionicons name={name} size={size} color={color}></Ionicons>
    </>
  );
}

export default IconButton;
