import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Text } from "react-native";
import BackButton from ".";
import CenterView from "../CenterView";

storiesOf("Drawer", module)
  // .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Drawer", () => (
    <BackButton>
      <Text>{text("BackButton text", "Hello BackButton")}</Text>
    </BackButton>
  ));
