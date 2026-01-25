import { View, StyleSheet } from "react-native";
import AppNavigator from "../components/AppNavigator";

export default function AppNavigatorScreen() {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                  // Make container take full screen height
    justifyContent: 'flex-end', // Push content to bottom
    alignItems: 'center',     // Center horizontally
  },
});
