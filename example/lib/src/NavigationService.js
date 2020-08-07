import * as React from "react";
import { StackActions } from "@react-navigation/native";

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();

export const navigate = (routeName, params) => {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(routeName, params);
  }
};

export const push = (routeName, params, ...args) => {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.dispatch(
      StackActions.push(routeName, params, ...args)
    );
  }
};

export const goBack = (...args) => {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.goBack(...args);
  }
};

export const pop = (...args) => {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.dispatch(StackActions.pop(...args));
  }
};

export const popToTop = (...args) => {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.dispatch(StackActions.popToTop(...args));
  }
};

export const reset = (...args) => {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.reset(...args);
  }
};
