import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';
import GazeButton from 'react-360-gaze-button';
import Crosshair from './entities/Crosshair';
import Barista from './pointsOfInterest/Barista';

export default class Synergize extends React.Component {
  state = {
    gazed: false
  };

  setGazed = () => {
    this.setState({ gazed: true });
  };
  render() {
    const { gazed } = this.state;
    return (
      <View style={styles.panel}>
        <GazeButton
          duration={250}
          onClick={this.setGazed}
          render={(remainingTime, isGazed) => (
            <View style={styles.greetingBox}>
              <Text style={styles.greeting}>
                {gazed
                  ? "You have gazed me"
                  : isGazed
                    ? remainingTime
                    : "Gaze me"}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    backgroundColor: '#ecf0f1',
    borderRadius: 15,
    padding: 5,
    width: 300
  },
  greeting: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 30,
  },
});

AppRegistry.registerComponent('synergize', () => Synergize);
AppRegistry.registerComponent('crosshair', () => Crosshair);
AppRegistry.registerComponent('barista', () => Barista);
