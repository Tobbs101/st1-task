import React, { useState } from "react";
import { StyleSheet, Text, View, Switch, TouchableOpacity } from "react-native";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState("testing");

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        paddingVertical: 20,
        paddingHorizontal: 5,
        backgroundColor: darkTheme ? "#ccc" : "#fff",
        alignItems: "center",
      }}
    >
      <Switch
        value={darkTheme}
        onValueChange={() => {
          setDarkTheme(!darkTheme);
        }}
      ></Switch>
      <Text
        style={{
          fontSize: 40,
          color: "black",
          backgroundColor: "#ddd",
          width: "100%",
          textAlign: "right",
          paddingRight: 20,
          paddingVertical: 5,
        }}
      >
        {result}
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 4,
            backgroundColor: "#ccc",
            height: 70,
            width: 70,
            margin: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 37, color: "black", textAlign: "center" }}>
            1
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
