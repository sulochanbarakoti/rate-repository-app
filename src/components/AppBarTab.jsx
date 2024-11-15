import { Text, StyleSheet, View } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  container: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  // ...
});

const AppBarTab = ({ title }) => {
  return (
    <View>
      <Text style={styles.container}>{title}</Text>
    </View>
  );
};

export default AppBarTab;
