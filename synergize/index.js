import React from "react";
import { AppRegistry, View } from "react-360";
import Crosshair from "./entities/Crosshair";
import Kettle from "./pointsOfInterest/Kettle";
import Cup from "./pointsOfInterest/Cup";
import Bicycle from "./pointsOfInterest/Bicycle";
import Sink from "./pointsOfInterest/Sink";
import Fridge from "./pointsOfInterest/Fridge";
import Man from "./pointsOfInterest/Man";
import Picture from "./pointsOfInterest/Picture";
import Counter from "./pointsOfInterest/Counter";
import PaperTowel from "./pointsOfInterest/PaperTowel";
import Filter from "./pointsOfInterest/Filter";
import Light from "./pointsOfInterest/Light";

export default class Synergize extends React.Component {
  render() {
    return <View />;
  }
}

AppRegistry.registerComponent("synergize", () => Synergize);
AppRegistry.registerComponent("crosshair", () => Crosshair);
AppRegistry.registerComponent("barista", () => Barista);
AppRegistry.registerComponent("kettle", () => Kettle);
AppRegistry.registerComponent("cup", () => Cup);
AppRegistry.registerComponent("bicycle", () => Bicycle);
AppRegistry.registerComponent("sink", () => Sink);
AppRegistry.registerComponent("fridge", () => Fridge);
AppRegistry.registerComponent("man", () => Man);
AppRegistry.registerComponent("filter", () => Filter);
AppRegistry.registerComponent("paperTowel", () => PaperTowel);
AppRegistry.registerComponent("counter", () => Counter);
AppRegistry.registerComponent("picture", () => Picture);
AppRegistry.registerComponent("light", () => Light);
