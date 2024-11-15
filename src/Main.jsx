import { StyleSheet, View } from "react-native";
import RepositoryList from "./components/RepositoryLIst";
import AppBar from "./components/AppBar";
import { Navigate, Route, Routes } from "react-router-native";
import SignIn from "./SignIn";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* <RepositoryList /> */}
    </View>
  );
};

export default Main;
