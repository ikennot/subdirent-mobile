import  {View,Pressable,StyleSheet,Image,Text} from "react-native";
import Dashboard from '@assets/navigation-assets/dashboard.png'
export default function Modules(props){
    return(
        <Pressable style={styles.container}>
          <Image source={props.Image ?? Dashboard}/>
          <Text>{props.label ?? 'Dashboard'}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
       flexDirection:column, 
    }
})