import React from "react";
import { View, Text } from "react-native";
import { Link } from "react-router-native";

import styles from "./styles";

const Header = () => (
  <View style={styles.nav}>
    <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
      <Text>Home</Text>
    </Link>
    <Link to="/demo" underlayColor="#f0f4f7" style={styles.navItem}>
      <Text>Demo</Text>
    </Link>
    <Link to="/topics" underlayColor="#f0f4f7" style={styles.navItem}>
      <Text>Topics</Text>
    </Link>
  </View>
);
export default Header;
