import { NavigationActions, StackActions } from "react-navigation";

let navigator;

function setGlobalLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

function back(options) {
  navigator.dispatch(NavigationActions.back(options));
}

function push(routeName, params) {
  navigator.dispatch(
    StackActions.push({
      routeName,
      params
    })
  );
}

function pop(options) {
  navigator.dispatch(StackActions.pop(options));
}

function popToTop(options) {
  navigator.dispatch(StackActions.popToTop(options));
}

function reset(options) {
  navigator.dispatch(StackActions.reset(options));
}

export default {
  pop,
  push,
  back,
  popToTop,
  navigate,
  setTopLevelNavigator
};
