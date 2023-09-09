import React, { useState } from "react";
import { Text, SafeAreaView } from "react-native";
import { viewStyle, textStyle } from "./styles";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <SafeAreaView style={viewStyle}>
      <Text style={textStyle}>Tobi Idowu</Text>
    </SafeAreaView>
  );
}
