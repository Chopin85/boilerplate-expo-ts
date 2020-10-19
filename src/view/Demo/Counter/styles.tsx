import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  fadingContainer: {
    flex: 1,
    alignSelf: "flex-end",
    paddingVertical: 8,
    backgroundColor: "powderblue",
    width: 250,
    height: "100%",
    position: "absolute",
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
  },
  text: {
    fontSize: 15,
    textAlign: "center",
  },
  number: {
    fontSize: 40,
    textAlign: "center",
    paddingTop: 10,
  },
});

export default styles;
