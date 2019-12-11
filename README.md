<img alt="React Navigation Helpers" src="https://github.com/WrathChaos/react-navigation-helpers/blob/master/assets/logo.png" width="1050"/>

Helpers for React Navigation.

[![npm version](https://img.shields.io/npm/v/react-navigation-helpers.svg?style=for-the-badge)](https://www.npmjs.com/package/react-navigation-helpers)
[![npm](https://img.shields.io/npm/dt/react-navigation-helpers.svg?style=for-the-badge)](https://www.npmjs.com/package/react-navigation-helpers)
![expo-compatible](https://img.shields.io/badge/Expo-compatible-9cf.svg?style=for-the-badge)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

## Installation

Add the dependency:

### React Native:

```ruby
npm i react-navigation-helpers
```

## Peer Dependencies

###### IMPORTANT! You need install them.

```
"react": ">= 16.x.x",
"react-navigation": ">= 3.x.x"
```

## Usage

### Global Level Navigator

<b>Firstly</b> set the global level navigator reference

```js
import NavigationService from "react-navigation-helpers";


<MainNavigator
  ref={navigatorRef =>
    NavigationService.setGlobalLevelNavigator(navigatorRef)
  }
/>
```

### NavigationService Usage

#### Navigate Example

```js
NavigationService.navigate("home")
```

#### Push Example

```js
NavigationService.push("home")
```

#### Pop Example

```js
NavigationService.pop()
```

#### PopToTop Example

```js
NavigationService.popToTop()
```

#### Back Example

```js
NavigationService.back()
```


#### Reset Example

```js
NavigationService.reset()
```

## How to pass prop with this library?

The usage does not change. Simply put your prop as the secondary prop **as same as React Navigation** itself.

#### Navigate
```js
NavigationService.navigate("home", {data: myData, myId: "d1f01df1" })
```

#### Push
```js
NavigationService.push("home", {data: myData, myId: "d1f01df1" })
```


## How to receive the passed props from navigation or push functions?

```js
const data = props.navigation.getParam("data", null) // Second one is default value
const myId = props.navigation.getParam("myId", "") // Second one is default value
```

### Configuration - Props

| Property                |   Type   | Default  | Description                            |
| ----------------------- | :------: | :------: | -------------------------------------- |
| setGlobalLevelNavigator | function | function | set your global level navigator (MUST) |
| navigate                | function | function | navigate the selected screen           |
| push                    | function | function | push the selected screen               |
| back                    | function | function | back the previous screen               |
| pop                     | function | function | pop the previous screen                |
| popToTop                | function | function | pop the top level of the screen        |
| reset                   | function | function | reset the navigator                    |


### Roadmap

- [x] ~~LICENSE~~
- [ ] Better & Real World Example
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Navigation Helpers Library is available under the MIT license. See the LICENSE file for more info.
