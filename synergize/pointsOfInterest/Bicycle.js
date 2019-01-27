import React from "react";
import { StyleSheet, Text, View } from "react-360";

export default class Cup extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Bicycle : Bicyclette</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    justifyContent: "center",
    alignItems: "center"
  },
  greetingBox: {
    backgroundColor: "rgba(255,255,255,0.85)",
    borderRadius: 15,
    padding: 5,
    width: 300
  },
  greeting: {
    textAlign: "center",
    color: "#333333",
    fontSize: 30
  }
});
