import { StyleSheet, View } from "react-native";
import Colors from '../constants/Colors'

function Card({ children }) {
  return (
    <>
      <View style={styles.inputConainer}>{children}</View>
    </>
  );
}

export default Card;

const styles = StyleSheet.create({
  inputConainer: {
    marginTop: 36,
    backgroundColor: Colors.primary600,
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
    gap: 4,
  },
});
