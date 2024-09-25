import { View, Text, Pressable, StyleSheet, Platform } from "react-native";

function CategoryGridTitle({ title, color, navigation, id }) {
  return (
    <>
      <View style={[styles.gridItem, {backgroundColor : color}]}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({pressed})=>{
            return [
                styles.buttonStyle,
                pressed ? styles.iosClickEvent : null
            ]
          }}
          onPress={()=>{
            return navigation.navigate('MealsOverview', {title : title, id : id })
          }}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.titleStyle}>{title}</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
}

export default CategoryGridTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonStyle: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  iosClickEvent : {
    opacity : 0.3
  }
});
