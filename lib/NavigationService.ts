import * as React from "react";
import { NavigationContainerRef, StackActions } from "@react-navigation/native";

export let isReadyRef = React.createRef<any>();
export let navigationRef = React.createRef<NavigationContainerRef>();

export const navigate = (routeName: string, params?: any) => {
  if (isReadyRef.current && navigationRef && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef?.current?.navigate(routeName, params);
  }
};

export const push = (routeName: string, params?: any) => {
  if (isReadyRef.current && navigationRef && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.dispatch(StackActions.push(routeName, params));
  }
};

export const goBack = () => {
  if (isReadyRef.current && navigationRef && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.goBack();
  }
};

export const pop = (...args: any) => {
  if (isReadyRef.current && navigationRef && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.dispatch(StackActions.pop(...args));
  }
};

export const popToTop = () => {
  if (isReadyRef.current && navigationRef && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.dispatch(StackActions.popToTop());
  }
};

export const reset = (...args: any) => {
  if (isReadyRef.current && navigationRef && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.reset(...args);
  }
};
