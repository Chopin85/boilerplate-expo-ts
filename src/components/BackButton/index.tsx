import React from "react";
import { useHistory } from "react-router";
import { Pressable } from "react-native";

interface Props {
  path?: string;
  children: JSX.Element;
}

const BackButton = ({ children, path }: Props) => {
  const history = useHistory();
  const handlePress = () => {
    history.push(path ? path : "/");
  };

  return <Pressable onPress={handlePress}>{children}</Pressable>;
};

export default BackButton;
