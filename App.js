import React from "react";
import { StyleSheet, Text, View, Loading } from "react-native";
import Pulso from "./app/components/Pulso";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Smart Band Cow </Text>
      <Pulso />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000104",
    alignItems: "center",
    justifyContent: "center"
  }
});
