import React from "react";
import { Text } from "react-native";
import styles from "./styles";

interface Props {
  name: string;
}

const Book = ({ name }: Props) => {
  return <Text style={styles.book}>{name}</Text>;
};

export default Book;
