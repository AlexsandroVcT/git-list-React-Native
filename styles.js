import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7F50',
    paddingHorizontal: "10%",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 65,
    marginBottom: 20
  },
  lineText: {
    flex: 1,
    width: "50%",
    color: "#333",
    fontSize: 20,
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center",
    fontWeight: "bold"
  },
  line: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    marginVertical: 15,
    height: 60,
  },
  image: {
    alignSelf: "center",
    width: 42,
    height: 42,
    borderRadius: 42 / 2
  },
  pai: {
    flex: 1,
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-around",
    paddingHorizontal: "4%"
  }
});
export default styles
