import { View, Text, Button, StyleSheet } from "react-native";
import { CounterSliceAction } from "../store/redux/store";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => {
    return state.counter;
  });

  const showCounter = useSelector((state) => {
    return state.showCounter;
  });

  function plusButton() {
    dispatch(CounterSliceAction.increment());
  }

  function minusButton() {
    dispatch(CounterSliceAction.decrement());
  }

  function toggleButton() {
    dispatch(CounterSliceAction.toggle());
  }

  return (
    <>
      <View>
        <View>
          <Text>This is Counter</Text>
        </View>
        {showCounter ? (
          <View style={styles.counterTextContainer}>
            <Text style={styles.textCss}>{counter}</Text>
          </View>
        ) : null}

        <View>
          <Button title="Click and +" onPress={plusButton}></Button>
          <Button title="Click and -" onPress={minusButton}></Button>
          <Button title="Counter toggle!" onPress={toggleButton}></Button>
        </View>
      </View>
    </>
  );
}

export default Counter;

const styles = StyleSheet.create({
  textCss: {
    fontSize: 30,
    textAlign: "center",
  },
  counterTextContainer: {
    marginVertical: 10,
  },
});
