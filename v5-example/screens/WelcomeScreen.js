import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import * as NavigationService from "../lib/src/NavigationService";
import styles from "./styles/styles";

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>WelcomeScreen</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => NavigationService.navigate("Home")}
        >
          <Text style={styles.textStyle}>Navigate to HomeScreen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
