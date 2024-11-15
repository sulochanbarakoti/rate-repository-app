import { View, Text, StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  container: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  // ...
});

const AppBarTab = ({ props }) => {
  return (
    <View>
      <Text style={styles.container}>{props}</Text>
    </View>
  );
};

export default AppBarTab;
