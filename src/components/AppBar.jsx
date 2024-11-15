import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import { Link } from "react-router-native";

const AppBar = () => {
  const tabs = [
    { title: "Repositories", path: "/" },
    { title: "Sign In", path: "/sign-in" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {tabs.map(({ title, path }) => (
          <Link key={title} to={path} style={{ paddingRight: 15 }}>
            <AppBarTab title={title} />
          </Link>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Constants.statusBarHeight,
    backgroundColor: "#24292e",
  },
});
export default AppBar;
