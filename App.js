import React, { useState } from "react";
import { Text, SafeAreaView, Image } from "react-native";
import { viewStyle, textStyle, imageStyle } from "./styles";

export default function App() {
  const githubUrl = "https://github.com/Tobbs101";
  return (
    <SafeAreaView style={viewStyle}>
      <Text style={textStyle}>Tobi Idowu</Text>
      <Image source={require("./assets/profile.jpg")} style={imageStyle} />
    </SafeAreaView>
  );
}
