import { StyleSheet, Text, View, Pressable } from "react-native";

function PrimaryButton({ children, onPress }) {
  function buttonHandler() {
    onPress();
  }

  return (
    <>
      <View style={styles.buttonOuterContainer}>
        <Pressable
          style={({ pressed }) => {
            return pressed
              ? [styles.buttonInnerContainer, styles.iosEffect]
              : styles.buttonInnerContainer;
          }}
          onPress={buttonHandler}
          android_ripple={{ color: "white" }}
        >
          <Text style={styles.textCSS}>{children}</Text>
        </Pressable>
      </View>
    </>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  textCSS: {
    textAlign: "center",
    color: "white",
  },
  iosEffect: {
    opacity: 0.5,
  },
});
