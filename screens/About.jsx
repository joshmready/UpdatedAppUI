import React from "react";
import { View, StyleSheet, Text } from "react-native";

const About = () => {
  return (
    <View style={styles.center}>
      <Text>This is the about screen</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});