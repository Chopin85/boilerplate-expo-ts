import React from "react";
import { Pressable } from "react-native";
import styles from "./styles";

interface Props {
  onPress: () => void;
  children: JSX.Element;
  width?: string;
}

const ButtonAction = ({ onPress, children, width }: Props) => {
  return (
    <Pressable
      style={[styles.button, { width: width ? width : "70%" }]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};

export default ButtonAction;
