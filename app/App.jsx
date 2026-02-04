import { NavigationContainer } from "@react-navigation/native";
import MainLayout from "./MainLayout";
import { useLogin } from "./hooks/uselogin";
export default function App() {
  return (
      <MainLayout />
  );
}
