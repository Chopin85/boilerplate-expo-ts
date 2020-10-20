import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import Book from ".";
import CenterView from "../../../components/CenterView";

storiesOf("Book", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("with text", () => <Book name={text("Book text", "First book")} />);
