import React from 'react';
import { StyleSheet, Text, View } from 'react-360';
import GazeButton from 'react-360-gaze-button';

export default class Barista extends React.Component {
  state = {
    gazed: false
  };

  openDialog = () => {
    console.log('open');
    this.setState({ gazed: true });
  };

  closeDialog = () => {
    console.log('close');
    this.setState({ gazed: false });
  }

  render() {
    const { gazed } = this.state;

    return (
      <View style={styles.location} onEnter={() => {this.openDialog()}} onExit={() => {this.closeDialog()}}>
        {!gazed ?
          <View style={styles.point}></View> :
          <View style={styles.dialogBox}>
            <Text style={styles.dialogText}>Barista</Text>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  location: {
    transform: [{
      rotateY: -90
    }]
  },
  point: {
    width: 10,
    height: 10,
    backgroundColor: '#ecf0f1',
    borderRadius: 15,
  },
  dialogBox: {
    backgroundColor: '#ecf0f1',
  },
  dialogText: {
    color: '#333333',
    fontSize: 15,
  },
});
