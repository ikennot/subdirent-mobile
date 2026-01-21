import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './features/auth/screens/LoginScreen';
const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Subdirent</Text>
      <LoginScreen/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
