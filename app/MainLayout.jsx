import AppNavigator from "./navigation/components/AppNavigator";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "./features/account/screens/Account";
import DashboardScreen from "./features/dashboard/screens/DashboardScreen";
import MissingScreen from "./features/MissingScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import PaymentScreen from "./features/payments/screens/PaymentScreen"
const Tab = createBottomTabNavigator();

export default function MainLayout() {
  return (
    <View style={styles.container}>
      {/* SCREEN CONTENT */}
      <View style={styles.content}>
        <Tab.Navigator
          screenOptions={{ headerShown: false }}
          tabBar={(props) => (
            <SafeAreaView edges={["bottom"]}>
              <AppNavigator {...props} />
            </SafeAreaView>
          )}
        >
          <Tab.Screen name="Dashboard" component={DashboardScreen} />
          <Tab.Screen name="Property" component={MissingScreen} />
          <Tab.Screen name="Payments" component={PaymentScreen} />
          <Tab.Screen name="Maintenance" component={MissingScreen} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff', // Add a background color to prevent content from overlapping
  },
});
