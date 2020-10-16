const STORYBOOK_START = true;
//change for normal APP
export default STORYBOOK_START
  ? require("./storybook").default
  : require("./src/view/App").default;
