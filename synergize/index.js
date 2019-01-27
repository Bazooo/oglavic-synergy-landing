import React from 'react';
import {
  AppRegistry,
  View
} from 'react-360';
import Crosshair from './entities/Crosshair';
import Barista from './pointsOfInterest/Barista';
import Kettle from './pointsOfInterest/Kettle';

export default class Synergize extends React.Component {
  render() {
    return (
      <View></View>
    );
  }
};


AppRegistry.registerComponent('synergize', () => Synergize);
AppRegistry.registerComponent('crosshair', () => Crosshair);
AppRegistry.registerComponent('barista', () => Barista);
AppRegistry.registerComponent('kettle', () => Kettle);
