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
import ButtonActiton from "../ButtonAction";

const Drawer = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  return (
    <View style={styles.drawerContainer}>
      <ButtonActiton
        onPress={() => {
          dispatch(closeDrawer());
          setValue("");
        }}
      >
        <Text>Close</Text>
      </ButtonActiton>
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
      <ButtonActiton onPress={() => dispatch(incrementCounter())}>
        <Text>+1</Text>
      </ButtonActiton>
      <Text style={styles.buttonTitle}>REMOVE</Text>
      <ButtonActiton onPress={() => dispatch(decrementCounter())}>
        <Text>-1</Text>
      </ButtonActiton>
      <Text style={styles.buttonTitle}>ADD {value}</Text>
      <ButtonActiton
        onPress={() => dispatch(incrementCounterWithValue(parseInt(value)))}
      >
        <Text>+{value}</Text>
      </ButtonActiton>
      <Text style={styles.buttonTitle}>REMOVE {value}</Text>
      <ButtonActiton
        onPress={() => dispatch(decrementCounterWithValue(parseInt(value)))}
      >
        <Text>+{value}</Text>
      </ButtonActiton>
      <Text style={styles.buttonTitle}>SET TO {value}</Text>
      <ButtonActiton
        onPress={() => dispatch(setCounterToValue(parseInt(value)))}
      >
        <Text>SET {value}</Text>
      </ButtonActiton>
      <Text style={styles.buttonTitle}>RESET</Text>
      <ButtonActiton onPress={() => dispatch(resetCounter())}>
        <Text>RESET</Text>
      </ButtonActiton>
    </View>
  );
};

export default Drawer;
