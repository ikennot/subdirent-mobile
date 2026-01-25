import  {View, StyleSheet,Image,Text} from "react-native";
import Modules from "./buttons/Modules";
export default function AppNavigator(){
  return (
        <View style={styles.container}>
          <Modules/>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
      width:'100%',
      height:'70',
      backgroundColor:'grey'
    }
})