import React from "react";
import { View, Text, Button } from "react-native";
import BackButton from "../../../components/BackButton";
import styles from "./styles";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { openDrawer } from "../../../store/drawer/actions";
import { RootState } from "../../../store";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(
    (state: RootState) => state.counter.counter,
    shallowEqual
  );

  return (
    <View style={styles.container}>
      <BackButton>
        <Text>BACK</Text>
      </BackButton>
      <Text style={styles.text}>
        Check the Redux Devtools to see the dispatched actions.
      </Text>
      <Text style={styles.number}>{counter}</Text>
      <Button title="Open Drawer" onPress={() => dispatch(openDrawer())} />
    </View>
  );
};

export default Counter;
