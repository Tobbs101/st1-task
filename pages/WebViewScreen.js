import React from "react";
import { WebView } from "react-native-webview";

const githubUrl = "https://github.com/Tobbs101";

const WebViewScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button title="Return to App" onPress={handleGitHubPage} />
      <WebView source={{ uri: githubUrl }} />
    </SafeAreaView>
  );
};

export default WebViewScreen;
