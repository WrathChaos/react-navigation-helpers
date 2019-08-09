import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
// Screens
import WelcomeScreen from "../../screens/WelcomeScreen";
import HomeScreen from "../../screens/HomeScreen";

export default class NavigationService {
  static createBottomTabNavigator() {
    const MainStack = createStackNavigator({
      welcome: WelcomeScreen,
      home: HomeScreen
    });

    return createAppContainer(
      createSwitchNavigator(
        {
          root: MainStack,
          initial: MainStack
        },
        {
          initialRouteName: "initial"
        }
      )
    );
  }
}
