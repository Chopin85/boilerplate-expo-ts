import React from "react";
import { View } from "react-native";
import { Route, NativeRouter, BackButton } from "react-router-native";
import Header from "../../components/Header";
import Home from "../Home";
import Demo from "../Demo";
import ApiDemo from "../ApiDemo";

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
        <Route path="/apidemo" component={ApiDemo} />
      </View>
    </NativeRouter>
  );
};

export default App;
