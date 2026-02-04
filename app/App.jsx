import MainLayout from "./MainLayout";
import LoginScreen from "./features/auth/screens/LoginScreen";
// Import ang LoginProvider at useLogin mula sa ating bagong Context file.
// Ang LoginProvider ang magbibigay ng access sa login state sa buong app.
// Ang useLogin ay gagamitin para ma-access ang isLogin state.
import { LoginProvider, useLogin } from "./context/LoginContext";

export default function App() {
  return (
    // Balutin ang buong app sa LoginProvider upang ang login state ay maging available globally.
    <LoginProvider>
      <AppContent />
    </LoginProvider>
  );
}

// Ito ang pangunahing logic ng app na magde-decide kung LoginScreen o MainLayout ang ipapakita.
function AppContent() {
  // Gamitin ang useLogin hook para makuha ang current login status.
  const { isLogin } = useLogin();

  // Kung naka-login na (isLogin ay true), ipapakita ang MainLayout.
  // Kung hindi pa (isLogin ay false), ipapakita ang LoginScreen.
  return isLogin ? <MainLayout /> : <LoginScreen />;
}
