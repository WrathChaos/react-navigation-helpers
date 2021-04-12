import * as React from "react";
import { StackActions } from "@react-navigation/native";

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();

export const navigate = (routeName: string, params: any) => {
  if (isReadyRef.current && navigationRef && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef?.current.navigate(routeName, params);
  }
};

export const push = (routeName: string, params: any, ...args: any) => {
  if (isReadyRef.current && navigationRef && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.dispatch(
      StackActions.push(routeName, params, ...args),
    );
  }
};

export const goBack = (...args: any) => {
  if (isReadyRef.current && navigationRef && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.goBack(...args);
  }
};

export const pop = (...args: any) => {
  if (isReadyRef.current && navigationRef && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.dispatch(StackActions.pop(...args));
  }
};

export const popToTop = (...args: any) => {
  if (isReadyRef.current && navigationRef && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.dispatch(StackActions.popToTop(...args));
  }
};

export const reset = (...args: any) => {
  if (isReadyRef.current && navigationRef && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.reset(...args);
  }
};
