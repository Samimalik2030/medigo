import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigation from "./components/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingNavigation from "./components/OnboardingNavigation";
import { AuthProvider, useAuth } from "./AuthContext";

// A wrapper to access context inside the App component
const MainNavigator = () => {
  const { userAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {!userAuthenticated ? <OnboardingNavigation /> : <AppNavigation />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <MainNavigator />
      </AuthProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
