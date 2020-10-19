import React from "react";
import { View } from "react-native";
import { Route, NativeRouter, BackButton } from "react-router-native";
import Header from "../../components/Header";
import Home from "../Home";
import Demo from "../Demo";
import Topics from "../Topics";

import styles from "./styles";

const App = () => {
  return (
    <NativeRouter>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.container}>
        <Route exact path="/" component={Home} />
        <Route path="/demo" component={Demo} />
        <Route path="/topics" component={Topics} />
      </View>
    </NativeRouter>
  );
};

export default App;
