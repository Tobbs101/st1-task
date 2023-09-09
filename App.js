import React, { useState } from "react";
import { Text, SafeAreaView, Image, Button, View } from "react-native";
import { WebView } from "react-native-webview";
import { viewStyle, textStyle, imageStyle, buttonStyle } from "./styles";

export default function App() {
  const [toggleWebView, setToggleWebView] = useState(false);
  const githubUrl = "https://github.com/Tobbs101";

  const handleGitHubPage = () => {
    setToggleWebView(!toggleWebView);
  };

  if (toggleWebView) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Button title="Return to App" onPress={handleGitHubPage} />
        <WebView source={{ uri: githubUrl }} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={viewStyle}>
      <Text style={textStyle}>Tobi Idowu</Text>
      <Image source={require("./assets/profile.jpg")} style={imageStyle} />
      <View style={buttonStyle}>
        <Button
          title="Open GitHub"
          color={"#0d1117"}
          onPress={handleGitHubPage}
        />
      </View>
    </SafeAreaView>
  );
}
