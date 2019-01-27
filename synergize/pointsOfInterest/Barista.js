import React from 'react';
import { StyleSheet, Text, View } from 'react-360';
import GazeButton from 'react-360-gaze-button';

export default class Barista extends React.Component {
  state = {
    gazed: false
  };

  setGazed = () => {
    this.setState({ gazed: true });
  };

  render() {
    const { gazed } = this.state;

    return (
      <View style={styles.location}>
        <GazeButton
          duration={250}
          onClick={this.setGazed}
          render={(remainingTime, isGazed) => (
            <View style={styles.greetingBox}>
              <Text style={styles.greeting}>
                {gazed
                  ? "Paper towels"
                  : isGazed
                    ? remainingTime
                    : "Essuie-tout"}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  location: {
    height: 20,
    transform: [{
      // translate: [20, 10, -1],
      rotateY: -90
    }]
  },
  greetingBox: {
    backgroundColor: '#ecf0f1',
    borderRadius: 15,
    padding: 5
  },
  greeting: {
    color: '#333333',
    fontSize: 15,
  },
});
