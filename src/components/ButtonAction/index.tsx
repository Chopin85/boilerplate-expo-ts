import React from "react";
import { Pressable } from "react-native";
import styles from "./styles";

interface Props {
  onPress: () => void;
  children: JSX.Element;
}

const ButtonAction = ({ onPress, children }: Props) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {children}
    </Pressable>
  );
};

export default ButtonAction;
