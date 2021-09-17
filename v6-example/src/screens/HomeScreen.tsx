import React from "react";
import { View, Text, Button, StyleProp, ViewStyle } from "react-native";
import * as NavigationService from "../../build/dist/NavigationService";
/**
 * ? Local Imports
 */
import styles from "./HomeScreen.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IHomeScreenProps {
  style?: CustomStyleProp;
}

const HomeScreen: React.FC<IHomeScreenProps> = ({ style }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => {
          NavigationService.navigate("Settings");
        }}
      />
    </View>
  );
};

export default HomeScreen;
