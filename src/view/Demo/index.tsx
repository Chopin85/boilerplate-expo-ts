import React, { useRef, useEffect } from "react";
import {
  View,
  Animated,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import BackButton from "../../components/BackButton";
import Drawer from "../../components/Drawer";
import Counter from "./Counter";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { closeDrawer } from "../../store/drawer/actions";

import styles from "./styles";

const Demo = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state: RootState) => state.drawer.isOpen,
    shallowEqual
  );

  const drawerAnim = useRef(new Animated.Value(150)).current;

  const openMenu = () => {
    Animated.timing(drawerAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(drawerAnim, {
      toValue: 150,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (isOpen) openMenu();
    else closeMenu();
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) dispatch(closeDrawer());
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1 }}>
        <Counter />
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              transform: [
                {
                  translateX: drawerAnim,
                },
              ],
            },
          ]}
        >
          <Drawer />
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Demo;
