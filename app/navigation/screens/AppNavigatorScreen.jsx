import  {View, StyleSheet,Image,Text} from "react-native";
import AppNavigator from "../components/AppNavigator";
export default function AppNavigatorScreen(){
return (
    <View style={styles.container}>
        <AppNavigator/>
    </View>
)
}


const styles = StyleSheet.create({
    container:{
      justifyContent:'center',
      alignItems:'center'
    }
})