import { SafeAreaProvider } from 'react-native-safe-area-context';

// import LoginScreen from './features/auth/screens/LoginScreen';
// import Account from './features/account/screens/Account';

// This file is the ENTRY SCREEN for Expo Router
// Whatever you export here becomes the first screen

import { SafeAreaView } from 'react-native-safe-area-context';

// Import the screen directly
import PaymentScreen from './features/payments/screens/PaymentScreen';

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
         {/* Show the screen directly, bypassing all navigation */}
         <PaymentScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}