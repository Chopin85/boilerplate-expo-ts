import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { closeDrawer } from "../../store/drawer/actions";
import {
  incrementCounter,
  decrementCounter,
  incrementCounterWithValue,
  decrementCounterWithValue,
  setCounterToValue,
  resetCounter,
} from "../../store/counter/actions";
import ButtonAction from "../ButtonAction";

const Drawer = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  return (
    <View style={styles.drawerContainer}>
      <ButtonAction
        onPress={() => {
          dispatch(closeDrawer());
          setValue("");
        }}
      >
        <Text>Close</Text>
      </ButtonAction>
      <Text style={styles.drawerTitle}>Drawer</Text>
      <Text style={styles.buttonTitle}>Enter a value :</Text>

      <TextInput
        keyboardType="number-pad"
        style={{
          height: 40,
          borderColor: "red",
          borderWidth: 3,
          marginBottom: 10,
          width: "70%",
          alignSelf: "center",
        }}
        onChangeText={(newValue) => setValue(newValue)}
        value={value}
      />

      <Text style={styles.buttonTitle}>ADD</Text>
      <ButtonAction onPress={() => dispatch(incrementCounter())}>
        <Text>+1</Text>
      </ButtonAction>
      <Text style={styles.buttonTitle}>REMOVE</Text>
      <ButtonAction onPress={() => dispatch(decrementCounter())}>
        <Text>-1</Text>
      </ButtonAction>
      <Text style={styles.buttonTitle}>ADD {value}</Text>
      <ButtonAction
        onPress={() => dispatch(incrementCounterWithValue(parseInt(value)))}
      >
        <Text>+{value}</Text>
      </ButtonAction>
      <Text style={styles.buttonTitle}>REMOVE {value}</Text>
      <ButtonAction
        onPress={() => dispatch(decrementCounterWithValue(parseInt(value)))}
      >
        <Text>-{value}</Text>
      </ButtonAction>
      <Text style={styles.buttonTitle}>SET TO {value}</Text>
      <ButtonAction
        onPress={() => dispatch(setCounterToValue(parseInt(value)))}
      >
        <Text>SET {value}</Text>
      </ButtonAction>
      <Text style={styles.buttonTitle}>RESET</Text>
      <ButtonAction onPress={() => dispatch(resetCounter())}>
        <Text>RESET</Text>
      </ButtonAction>
    </View>
  );
};

export default Drawer;
