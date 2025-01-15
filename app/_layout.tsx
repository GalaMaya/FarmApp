import React, { useState, useEffect } from "react";
import { View } from "react-native";
import SplashScreen from "./SplashScreen";
import Pages from "./Pages";

export default function RootLayout() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false); // Sembunyikan SplashScreen setelah 3 detik
    }, 3000); // Durasi SplashScreen

    return () => clearTimeout(timer); // Bersihkan timer saat komponen di-unmount
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isSplashVisible ? <SplashScreen /> : <Pages />}
    </View>
  );
}
