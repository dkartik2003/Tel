import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Stack } from "expo-router";

SplashScreen.preventAutoHideAsync(); // by keping this line we can make the splash creen or opening screen loading untill load is complete we can aso remove this line
export default function RootLayout() {
  const [loaded] = useFonts({
    // we can use diff font family through exporting in expo if we want to
    SpaceMono: require("@/assets/fonts/  SpaceMono-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  if (!loaded) {
    return null;
  }
  return (
    <>
      <StatusBar style="light" backgroundColor={Colors.tertiary} translucent />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name='(auth)' />
      </Stack>
    </>
  );
}
