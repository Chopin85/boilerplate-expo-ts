import React from "react";
import { Text, View } from "react-native";
import ButtonAction from "../../components/ButtonAction";
import BooksList from "./BooksList";
import styles from "./styles";

const ApiDemo = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>API Demo with Redux thunk</Text>
      </View>
      <BooksList />
    </>
  );
};

export default ApiDemo;
