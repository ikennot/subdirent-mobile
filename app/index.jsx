import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import LoginScreen from './features/auth/screens/LoginScreen';
import Account from './features/account/screens/Account';

// This file is the ENTRY SCREEN for Expo Router
// Whatever you export here becomes the first screen

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* Palitan mo lang kung alin ang gusto mong first screen */}
        {/* <LoginScreen /> */}
        <Account />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
