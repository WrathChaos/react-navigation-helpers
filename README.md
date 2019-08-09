<img alt="React Navigation Helpers" src="https://github.com/WrathChaos/react-navigation-helpers/blob/master/assets/logo.png" width="1050"/>

Helpers for React Navigation.

[![npm version](https://img.shields.io/npm/v/react-navigation-helpers.svg)](https://www.npmjs.com/package/react-navigation-helpers)
[![npm](https://img.shields.io/npm/dt/react-navigation-helpers.svg)](https://www.npmjs.com/package/react-navigation-helpers)
![expo-compatible](https://img.shields.io/badge/Expo-compatible-9cf.svg)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

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


### ToDos

- [x] LICENSE
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Navigation Helpers Library is available under the MIT license. See the LICENSE file for more info.
