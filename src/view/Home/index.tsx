import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { animated, useSpring } from "react-spring";
import styles from "./styles";

const AnimatedView = animated(View);

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { x } = useSpring({ x: isOpen ? 360 : 0 });

  return (
    <>
      <Text style={styles.header}>Home</Text>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
        {/* <Text>HELLO</Text> */}
        <AnimatedView
          style={[
            { backgroundColor: "red", height: 30, width: 30 },
            { transform: [{ rotate: x.interpolate((val) => `${val}deg`) }] },
          ]}
        ></AnimatedView>
        {/* <AnimatedImage
          style={[
            styles.image,
            { transform: [{ rotate: x.interpolate((val) => `${val}deg`) }] },
          ]}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        /> */}
      </TouchableOpacity>
    </>
  );
};

export default Home;
