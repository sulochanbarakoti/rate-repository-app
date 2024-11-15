import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    padding: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    flexDirection: "row",
    gap: 25,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to={"/"}>
        <AppBarTab title="Repositories" />
      </Link>
      <Link to={"/sign-in"}>
        <AppBarTab title="Sign In" />
      </Link>
    </View>
  );
};

export default AppBar;
