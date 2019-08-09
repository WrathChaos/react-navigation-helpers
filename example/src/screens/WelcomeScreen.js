import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import NavigationService from "react-navigation-helpers";
import styles from "./styles/styles";

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>WelcomeScreen</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => NavigationService.push("home")}
        >
          <Text style={styles.textStyle}>Navigate to HomeScreen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
