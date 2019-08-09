import React, { Fragment } from "react";
import { StatusBar } from "react-native";
import NavigationService from "react-navigation-helpers";
import Navigation from "./src/services/navigation/Navigation";

const App = () => {
  const MainNavigator = Navigation.createBottomTabNavigator();

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <MainNavigator
        ref={navigatorRef =>
          NavigationService.setGlobalLevelNavigator(navigatorRef)
        }
      />
    </Fragment>
  );
};

export default App;
