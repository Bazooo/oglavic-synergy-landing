
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-360';

export default class Kettle extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Eau bouillante
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
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
