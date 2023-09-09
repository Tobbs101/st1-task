import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <SafeAreaView
      style={{
        height: "100%",
        width: "100%",
        paddingVertical: 20,
        paddingHorizontal: 5,
        backgroundColor: "#ccc",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: "black",
          width: "100%",
          textAlign: "center",
          paddingRight: 20,
          paddingVertical: 5,
        }}
      >
        Tobi Idowu
      </Text>
    </SafeAreaView>
  );
}
