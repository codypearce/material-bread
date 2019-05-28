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
* [Supported Components](#supported-components)
* [Contributing](#contributing)
* [Tests](#tests)
* [Accessibility](#accessibility)
* [Copyright and License](#copyright-and-license)

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



## Supported Components
A major goal of this library is to match all the components found in the material docs or provide enough demos/instructions that a developer can create a non-supported component from supported components. Keep in mind this still a work in progress so not all functionality from the Material Docs is supported yet. 

Currently there are 39 distinct components (though what is a full component and what is a subcomponent is somewhat arbitrary), each with many variations, and 4 utility components.

| Name                                                                         | iOS | Android | Web | Electron |
|------------------------------------------------------------------------------|-----|---------|-----|----------|
| [Appbar](https://material-bread.org/components/appbar)                       | ✓   | ✓       | ✓   | ✓        |
| [AppbarBottom](https://material-bread.org/components/appbar-bottom)          | ✓   | ✓       | ✓   | ✓        |
| [Avatar](https://material-bread.org/components/avatar)                       | ✓   | ✓       | ✓   | ✓        |
| [Backdrop](https://material-bread.org/components/backdrop)                   | ✓   | ✓       | ✓   | ✓        |
| [Badge](https://material-bread.org/components/badge)                         | ✓   | ✓       | ✓   | ✓        |
| [Banner](https://material-bread.org/components/banner)                       | ✓   | ✓       | ✓   | ✓        |
| [Bottom Navigation](https://material-bread.org/components/bottom-navigation) | ✓   | ✓       | ✓   | ✓        |
| [Button](https://material-bread.org/components/button)                       | ✓   | ✓       | ✓   | ✓        |
| [Card](https://material-bread.org/components/card)                           | ✓   | ✓       | ✓   | ✓        |
| [Checkbox](https://material-bread.org/components/checkbox)                   | ✓   | ✓       | ✓   | ✓        |
| [Chip](https://material-bread.org/components/chip)                           | ✓   | ✓       | ✓   | ✓        |
| [DataTable](https://material-bread.org/components/datatable)                 | ✓   | ✓       | ✓   | ✓        |
| [Dialog](https://material-bread.org/components/dialog)                       | ✓   | ✓       | ✓   | ✓        |
| [Divider](https://material-bread.org/components/divider)                     | ✓   | ✓       | ✓   | ✓        |
| [Drawer](https://material-bread.org/components/drawer)                       | ✓   | ✓       | ✓   | ✓        |
| [DrawerBottom](https://material-bread.org/components/drawer-bottom)          | ✓   | ✓       | ✓   | ✓        |
| [Fab](https://material-bread.org/components/fab)                             | ✓   | ✓       | ✓   | ✓        |
| [FabSpeeddial](https://material-bread.org/components/fab-speeddial)          | ✓   | ✓       | ✓   | ✓        |
| [Icon](https://material-bread.org/components/icon)                           | ✓   | ✓       | ✓   | ✓        |
| [IconButton](https://material-bread.org/components/iconbutton)               | ✓   | ✓       | ✓   | ✓        |
| [List](https://material-bread.org/components/list)                           | ✓   | ✓       | ✓   | ✓        |
| [ListExpand](https://material-bread.org/components/list-expand)              | ✓   | ✓       | ✓   | ✓        |
| [Menu](https://material-bread.org/components/menu)                           | ✓   | ✓       | ✓   | ✓        |
| [Paper](https://material-bread.org/components/paper)                         | ✓   | ✓       | ✓   | ✓        |
| [ProgressBar](https://material-bread.org/components/progress-bar)            | ✓   | ✓       | ✓   | ✓        |
| [ProgressCircle](https://material-bread.org/components/progress-circle)      | ✓   | ✓       | ✓   | ✓        |
| [RadioButton](https://material-bread.org/components/radiobutton)             | ✓   | ✓       | ✓   | ✓        |
| [Ripple](https://material-bread.org/components/ripple)                       | ✓   | ✓       | ✓   | ✓        |
| [Select](https://material-bread.org/components/select)                       | ✓   | ✓       | ✓   | ✓        |
| [SheetBottom](https://material-bread.org/components/sheet-bottom)            | ✓   | ✓       | ✓   | ✓        |
| [SheetSide](https://material-bread.org/components/sheet-side)                | ✓   | ✓       | ✓   | ✓        |
| [Slider](https://material-bread.org/components/slider)                       | ✓   | ✓       | ✓   | ✓        |
| [Snackbar](https://material-bread.org/components/snackbar)                   | ✓   | ✓       | ✓   | ✓        |
| [Switch](https://material-bread.org/components/switch)                       | ✓   | ✓       | ✓   | ✓        |
| [Tabs](https://material-bread.org/components/tabs)                           | ✓   | ✓       | ✓   | ✓        |
| [TextField](https://material-bread.org/components/textfield)                 | ✓   | ✓       | ✓   | ✓        |
| [ToggleButton](https://material-bread.org/components/togglebutton)           | ✓   | ✓       | ✓   | ✓        |
| [Tooltip](https://material-bread.org/components/tooltip)                     | ✓   | ✓       | ✓   | ✓        |
| [Typography](https://material-bread.org/components/typography)               | ✓   | ✓       | ✓   | ✓        |


Utility components

| Name                                                    | iOS | Android | Web | Electron |
|---------------------------------------------------------|-----|---------|-----|----------|
| [Anchor](https://material-bread.org/utils/anchor)       | ✓   | ✓       | ✓   | ✓        |
| [Color](https://material-bread.org/utils/color)         | ✓   | ✓       | ✓   | ✓        |
| [Hoverable](https://material-bread.org/utils/hoverable) | ✓   | ✓       | ✓   | ✓        |
| [Shadow](https://material-bread.org/utils/shadow)       | ✓   | ✓       | ✓   | ✓        |


## Contributing

All contributions are welcome and encouraged. If you are reporting a bug, please follow the bug issue template. If you are proposing an enhancement, please first search the backlogs before creating a new issue.

#### Contributing to library

[Storybook](https://github.com/storybooks/storybook) is used as the dev environment for all components on all platforms. You can learn about how to get the storybook environment running locally for all platforms [here](http://material-bread.org/contributing/library). Please follow the conventions already in place. For example, most components follow the made up "props for prebuilt, children for custom" pattern. Addtionally, make sure you are testing your components across platforms before making a PR.

#### Contributing to docs
Documentation is built using [GatsbyJs](https://github.com/gatsbyjs/gatsby) and all pages are built using react components. You can learn how to get the docs running locally here [here](https://material-bread.org/contributing/docs).

#### Easy first contribution
You can start extremely easily by simply improving demos or adding more interesting demos to the docs or storybook. Having interesting, useful, and plentiful demo's is a major goal of the project, so any help in that regard would be greatly appreciated.

## Tests

[Jest](https://jestjs.io/) is the current test framework for all components. You can see the result of each component test in our [storybook environement](https://codypearce.github.io/material-bread/?path=/story/components-appbar--simple) under the "Tests" tab. Writing more comprehensive tests is on the roadmap, but please consider contributing to speed this process up.

You can run tests locally using `npm test`.

You can generate test coverage by running `npm run test:generate-output`, this will output a json file with coverage.

## Accessibility

`react-native-web` describes how to write accessible react-native components on the web [here](https://github.com/necolas/react-native-web/blob/master/docs/guides/accessibility.md). Additionally, the storybook addon, [addon-a11y](https://www.npmjs.com/package/@storybook/addon-a11y), runs some simple accessibility tests on each component story. You can see the output of each accessibility test on the [Accessibility](https://codypearce.github.io/material-bread/?path=/story/components-buttons--custom) tab for each component. Please consider contributing to make accessibility even better.


## Copyright and License

Copyright 2019 Material Bread. 
Code released under the MIT license.
