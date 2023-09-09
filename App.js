import React, { useState } from "react";
import { Text, SafeAreaView, Image, Button } from "react-native";
import { WebViewNavigation } from "react-native-webview";
import { viewStyle, textStyle, imageStyle } from "./styles";

export default function App() {
  const githubUrl = "https://github.com/Tobbs101";
  return (
    <SafeAreaView style={viewStyle}>
      <Text style={textStyle}>Tobi Idowu</Text>
      <Image source={require("./assets/profile.jpg")} style={imageStyle} />
      <Button title="Open GitHub" onPress={() => {}} />
      <WebViewNavigation />
    </SafeAreaView>
  );
}
