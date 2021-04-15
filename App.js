import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ReactTraining from "./Source/index";
import { rayaTraining1, rayaTraining2 } from "./Source/funcRequire";
import LessonFlexbox from "./Source/LessonFlexbo";
import ChessBoard from "./Source/ChessBoard";

export default function App() {
  return (
    <View style={styles.container}>
      <ChessBoard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
