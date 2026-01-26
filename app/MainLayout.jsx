import AppNavigator from "./navigation/components/AppNavigator";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "./features/account/screens/Account";
import DashboardScreen from "./features/dashboard/screens/DashboardScreen";

const stack = createNativeStackNavigator();

export default function MainLayout(){

    return(
        <View style={styles.container}>
        
        <View style={styles.content}>
            <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen name="Dashboard" component={DashboardScreen}/>
            <stack.Screen name="Account" component={Account}/>
            </stack.Navigator>


        </View>
        <AppNavigator/>
        </View>
    )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  },

  content:{
    flex:1
  }

})