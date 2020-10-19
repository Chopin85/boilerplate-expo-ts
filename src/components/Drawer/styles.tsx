import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    alignSelf: "flex-end",
    paddingVertical: 8,
    backgroundColor: "powderblue",
    width: 150,
    height: "100%",
    position: "absolute",
  },
  buttonTitle: {
    alignSelf: "center",
    marginBottom: 5,
  },
  drawerTitle: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
  },
});

export default styles;
