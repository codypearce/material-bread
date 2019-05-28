<p align="center" style="margin-bottom: 0px !important;">
  <img width="200" src="http://material-bread.org/logo-shadow.svg" alt="Material Bread logo" align="center">
</p>
<h1 align="center" style="margin-top: 0px;">Material Bread</h1>


  
<p align="center" >Cross Platform React Native Material Design Components</p>

<div align="center" >

[![Build Status](https://img.shields.io/travis/codypearce/material-bread/master.svg?style=for-the-badge)](https://travis-ci.org/codypearce/material-bread) [![NPM registry](https://img.shields.io/npm/v/material-bread.svg?style=for-the-badge)](https://www.npmjs.com/package/material-bread) ![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge) ![NPM license](https://img.shields.io/badge/license-mit-red.svg?style=for-the-badge) [![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg?style=for-the-badge)](https://codypearce.github.io/material-bread/)

</div>

### Features

* Highly Customizable React Native Components.
* Cross platform support: React Native (iOS, Android), React-native-web (Browsers), Electron (Windows, Mac, Linux).
* Support for Material Design 2.0 components.
* Live react native demos you can edit in in your browser.


## Table of Contents
* [Quick Start](#quick-start)
* [Documentation](#documentation)
* [Getting Started](#getting-started)
  * [Guides](#guides)
  * [Example Repos](#example-repos)
  * [Usage](#usage)
* [Contributing](#contributing)
* [Supported Components](#supported-components)

## Quick Start

1. `npm install material-bread` or `yarn add material-bread`
2. Install and link [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
3. Wrap your root `<App>` with a `<BreadProvider>`
```jsx
<BreadProvider>
  <Root />
</BreadProvider>
```
4. Start developing!

Read the [getting started](#getting-started) guides for your platform to learn more.

## Documentation

The component API docs and curated demos can be found at [material-bread.org](https://material-bread.org). See the [contributing](#contributing) section to learn how to run the docs locally.

More demos for each component can be found at the component [Storybook](https://codypearce.github.io/material-bread/). This environment is used for developing cross-platform, see the [contributing](#contributing) section to learn how to set it up locally.

## Getting Started

### Guides

[Getting Started with React Native](http://material-bread.org/getting-started/react-native)

[Getting Started with Web](http://material-bread.org/getting-started/web)

[Getting Started with Electron](http://material-bread.org/getting-started/electron)

### Example Repos
Boilerplate projects with minimal configuration to get started on each platform.

React Native: [material-bread-rn-example](https://github.com/codypearce/material-bread-rn-example)

Expo: [material-bread-expo-example](https://github.com/codypearce/material-bread-expo-example)

React Web: [material-bread-react-example](https://github.com/codypearce/material-bread-react-example)

Electron: [material-bread-electron-example](https://github.com/codypearce/material-bread-electron-example)

### Usage

```jsx
import React from 'react';
import { Button } from 'material-bread';

function App() {
  return <Button type="contained">Click Me</Button>;
}
```

## Contributing

Any contributions are welcome, you can read more about [contributing in the docs](http://material-bread.org/contributing/library)

## Supported Components
A major goal of this library is to match all the components found in the material docs or provide enough demos/instructions that a developer can create a non-supported component from supported components. Keep in mind this still a work in progress so not all functionality from the Material Docs is supported yet. Currently there are 39 distinct components, each with many variations, and 4 utility components.


| Name              | iOS | Android | Web | Electron |
|-------------------|-----|---------|-----|----------|
| Appbar            | ✓   | ✓       | ✓   | ✓        |
| AppbarBottom      | ✓   | ✓       | ✓   | ✓        |
| Avatar            | ✓   | ✓       | ✓   | ✓        |
| Backdrop          | ✓   | ✓       | ✓   | ✓        |
| Badge             | ✓   | ✓       | ✓   | ✓        |
| Banner            | ✓   | ✓       | ✓   | ✓        |
| Bottom Navigation | ✓   | ✓       | ✓   | ✓        |
| Button            | ✓   | ✓       | ✓   | ✓        |
| Card              | ✓   | ✓       | ✓   | ✓        |
| Checkbox          | ✓   | ✓       | ✓   | ✓        |
| Chip              | ✓   | ✓       | ✓   | ✓        |
| DataTable         | ✓   | ✓       | ✓   | ✓        |
| Dialog            | ✓   | ✓       | ✓   | ✓        |
| Divider           | ✓   | ✓       | ✓   | ✓        |
| Drawer            | ✓   | ✓       | ✓   | ✓        |
| DrawerBottom      | ✓   | ✓       | ✓   | ✓        |
| Fab               | ✓   | ✓       | ✓   | ✓        |
| FabSpeedial       | ✓   | ✓       | ✓   | ✓        |
| Icon              | ✓   | ✓       | ✓   | ✓        |
| IconButton        | ✓   | ✓       | ✓   | ✓        |
| List              | ✓   | ✓       | ✓   | ✓        |
| ListExpand        | ✓   | ✓       | ✓   | ✓        |
| Menu              | ✓   | ✓       | ✓   | ✓        |
| Paper             | ✓   | ✓       | ✓   | ✓        |
| ProgressBar       | ✓   | ✓       | ✓   | ✓        |
| ProgresssCircle   | ✓   | ✓       | ✓   | ✓        |
| RadioButton       | ✓   | ✓       | ✓   | ✓        |
| Ripple            | ✓   | ✓       | ✓   | ✓        |
| Select            | ✓   | ✓       | ✓   | ✓        |
| SheetBottom       | ✓   | ✓       | ✓   | ✓        |
| SheetSide         | ✓   | ✓       | ✓   | ✓        |
| Slider            | ✓   | ✓       | ✓   | ✓        |
| Snackbar          | ✓   | ✓       | ✓   | ✓        |
| Switch            | ✓   | ✓       | ✓   | ✓        |
| Tabs              | ✓   | ✓       | ✓   | ✓        |
| TextField         | ✓   | ✓       | ✓   | ✓        |
| ToggleButton      | ✓   | ✓       | ✓   | ✓        |
| Tooltip           | ✓   | ✓       | ✓   | ✓        |
| Typography        | ✓   | ✓       | ✓   | ✓        |

Utility components

| Name              | iOS | Android | Web | Electron |
|-------------------|-----|---------|-----|----------|
| Anchor            | ✓   | ✓       | ✓   | ✓        |
| Color             | ✓   | ✓       | ✓   | ✓        |
| Hoverable         | ✓   | ✓       | ✓   | ✓        |
| Shadow            | ✓   | ✓       | ✓   | ✓        |
