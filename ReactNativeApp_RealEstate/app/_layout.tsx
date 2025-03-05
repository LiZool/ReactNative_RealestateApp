import { Stack, Slot } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect, useState, useCallback } from "react";
import { View, ActivityIndicator } from "react-native";
import * as SplashScreen from "expo-splash-screen"; // Import SplashScreen API
import SplashScreenComponent from "@/components/SplashScreen"; // Your custom splash screen component

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    // Add your custom fonts here
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Simulate some loading tasks (e.g., API calls, async storage, etc.)
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  // Hide the splash screen once everything is ready
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  if (!appIsReady || !fontsLoaded) {
    return <SplashScreenComponent />; // Show custom splash screen
  }

  return (
    <Slot onLayout={onLayoutRootView} /> 
  );  
}