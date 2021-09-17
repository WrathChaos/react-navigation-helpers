<img alt="React Navigation Helpers" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-navigation-helpers)

[![Helpers for React Navigation](https://img.shields.io/badge/-Helpers%20for%20React%20Navigation-orange?style=for-the-badge)](https://github.com/WrathChaos/react-navigation-helpers)

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

<i><b>IMPORTANT!</b> You need install them.</i>

```json
"react": ">= 16.x.x",
"@react-navigation/native": ">= 4.x.x"
```

## React Navigation Versions

| Version     | Supported React Navigation Version |
| ----------- | ---------------------------------- |
| _**1.0.0**_ | _**v6**_                           |
| 0.2.0       | v5                                 |
| < 0.1.0     | v4                                 |

## Usage

### Global Level Navigator

Set the global level navigation reference into the `NavigationContainer`

```jsx
import { isReadyRef, navigationRef } from "react-navigation-helpers";

useEffect((): any => {
  return () => (isReadyRef.current = false);
}, []);

<NavigationContainer
  ref={navigationRef}
  onReady={() => {
    isReadyRef.current = true;
  }}
>
  {/* Rest of your code */}
</NavigationContainer>;
```

## NavigationService Usage

### Navigate Example

```js
import * as NavigationService from "react-navigation-helpers";

NavigationService.navigate("home");
```

### Push Example

```js
import * as NavigationService from "react-navigation-helpers";

NavigationService.push("home");
```

### Pop Example

```js
import * as NavigationService from "react-navigation-helpers";

NavigationService.pop();
```

### PopToTop Example

```js
import * as NavigationService from "react-navigation-helpers";

NavigationService.popToTop();
```

### Back Example

```js
import * as NavigationService from "react-navigation-helpers";

NavigationService.back();
```

## How to pass prop with this library?

The usage does not change. Simply put your prop as the secondary prop **as same as React Navigation** itself.

### Navigate

```js
import * as NavigationService from "react-navigation-helpers";

NavigationService.navigate("home", { data: myData, myId: "d1f01df1" });
```

### Push

```js
import * as NavigationService from "react-navigation-helpers";

NavigationService.push("home", { data: myData, myId: "d1f01df1" });
```

## How to receive the passed props from navigation or push functions?

```js
const { data, id } = this.props.route.params;
```

### Configuration - Props

| Property |   Type   | Default  | Description                     |
| -------- | :------: | :------: | ------------------------------- |
| navigate | function | function | navigate the selected screen    |
| push     | function | function | push the selected screen        |
| goBack   | function | function | back the previous screen        |
| pop      | function | function | pop the previous screen         |
| popToTop | function | function | pop the top level of the screen |
| reset    | function | function | reset the navigator             |

### ToDos

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Navigation Helpers Library is available under the MIT license. See the LICENSE file for more info.
