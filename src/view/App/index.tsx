import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
