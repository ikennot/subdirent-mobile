import { Input } from "../components/input";
import  {View, StyleSheet,Image} from "react-native";
import Logo from '@/assets/app-assets/logo.png'
import LogoName from '@/assets/app-assets/logo-subdirent.png'
import Button from "../components/button";
import { Link } from "expo-router";

export default function LoginScreen(){
    return(
    <View style = {styles.LoginScreen}>
        <Image source={Logo} style={styles.logo} />
        <Image source = {LogoName} style = {styles.logoName} />
        <Input placeholder = "Enter your email"/>
         <Input placeholder = "Enter your password" secureTextEntry/>
          <Button
        title="LOGIN"
        onPress={() => console.log("Button pressed")}
      />
           <Link href="/features/auth/screens/ForgotPasswordScreen">Forgot password?</Link>

    </View>)



}

const styles = StyleSheet.create({
    LoginScreen:{
   flex:1,
   justifyContent: 'center',
   gap: 20,
   alignItems:'center'
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
      marginBottom: 2,
    },

    logoName:{
         width: 150,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 20,
    }
})