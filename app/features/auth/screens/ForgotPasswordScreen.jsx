import { View, Text, StyleSheet,Image} from 'react-native';
import Logo from '@/assets/app-assets/logo.png'
import LogoName from '@/assets/app-assets/logo-subdirent.png'
import Button from "../components/button";
import { Link } from "expo-router";

export default function ForgotPasswordScreen() {
  return (
    <View style={styles.container}>
     <Image source={Logo} style={styles.logo} />
     <Image source = {LogoName} style = {styles.logoName} />
     <Text style = {styles.headerText}>Forgot You Password?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex:1,
   justifyContent: 'center',
   gap: 10,
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
    },
    headerText: {
    // The core styles matching the image:
    fontSize:20,             
    fontWeight: 'bold',       // Or '700'
    color: '#102C4C',         // Deep Navy Blue
    fontFamily: 'System',     // Uses San Francisco (iOS) or Roboto (Android)
    textAlign: 'center',      // Usually centered on login screens
    letterSpacing: 0.5,       // Adds a tiny bit of breathing room
    marginBottom: 20,         // Spacing below the header
  }
});
