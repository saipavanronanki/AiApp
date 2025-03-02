import React from "react";
import TabNavigator from "../app/navigation/tabnavigator"; // Ensure correct path
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      
        <TabNavigator />
    
    </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}