import {useState} from 'react';
import { Input } from "../components/input";
import  {View, StyleSheet,Image} from "react-native";
import Logo from '@/assets/app-assets/logo.png'
import LogoName from '@/assets/app-assets/logo-subdirent.png'
import Button from "../components/button";
import { Link } from "expo-router";
// Ini-import na natin ang useLogin mula sa ating bagong global context.
// Ito ay para ma-access ang shared 'login' function.
import { useLogin } from '../../../context/LoginContext';
export default function LoginScreen(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // Kinukuha ang 'login' function mula sa LoginContext.
    const {login} = useLogin();
    return(
    <View style = {styles.LoginScreen}>
        <Image source={Logo} style={styles.logo} />
        <Image source = {LogoName} style = {styles.logoName} />
        <Input placeholder = "Enter your email" value={email} onChangeText={setEmail}/>
         <Input placeholder = "Enter your password" secureTextEntry value={password} onChangeText={setPassword}/>
          <Button
        title="LOGIN"
        onPress={() => {
           // Tinatawag ang global login function.
           // Kapag successful ang login, ang 'isLogin' state sa context ay magiging true.
           // Ang App.jsx na ang bahalang mag-render ng MainLayout.
           const logged = login(email,password)
        }}
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