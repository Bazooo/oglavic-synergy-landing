import React from 'react';
import { StyleSheet, View } from 'react-360';

export default class Crosshair extends React.Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.panel}>
        <View style={styles.crosshair}></View>
      </View>
    )
  }
}

const radius = 10;

const styles = StyleSheet.create({
  panel: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  crosshair: {
    backgroundColor: '#ffffff',
    width: radius,
    height: radius,
    borderRadius: 100,
  }
});
