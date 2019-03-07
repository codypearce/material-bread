---
title: Contributing
description: Below are guidelines for getting the project set up, developing, and making a PR.
path: /contributing
layout: page
group: standalone
status: complete
---

### Getting Started

1. Fork material-bread repo on github
2. Clone the fork to your machine `git clone git@github.com:<yourname>/material-bread.git`
3. Cd into project `cd material-bread`

The main project folders are as follows:

| folder     | desription              |
| ---------- | ----------------------- |
| .storybook | storybook config        |
| docs       | documentation site      |
| public     | storybook web files     |
| src        | component library       |
| storybook  | development environment |

Essentially the project files are in the `root` of the folder, and all documtation files live in the `docs` folder. The next steps depend on what whether you're working on the components themselves or the documentation.

### Component Library

This project uses [Storybook](https://storybook.js.org/) as it's development environment for both React Native and the web. Storybook has it's own simple webserver to run the web components, but the project uses a bare React Native app to run it's components and the Storybook environment.

#### Set up

You can follow the [React Native Docs](https://facebook.github.io/react-native/docs/getting-started) to get React Native installed if you need to. Once you have React Native set up, follow these steps to get the project set up:

1. Install dependencies by running `npm i` or `yarn`
2. Start up react native app by running `react-native run-ios` or `react-native run-android`.
3. Start up web project by openning a new terminal tab and running `npm run storybook-web`

The app should be running on whichever simulator you set up, and the web app should be available at `localhost:9009`.

#### Developing

Components all live in `src/components`, and they're displayed in the dev environment in a corresponding file in `storybook/stories`.

Use the following steps to create a new component:

1. Create a basic component file in `src/component` named `ComponentName.js`.
2. Import `withTheme` and Wrap component in the HOC theme component as such `export default withTheme(ComponentName);`
3. Add component to `src/index.js` as such `export { default as ComponentName } from './Components/ComponentName';`.
4. Create component file in `storybook/stories` as shown in the other files
5. Add component story to `storybook/stories/index` as such `export { default as ComponentName } from './ComponentName';`.

You should now see your component listed in your Storybook environment on the app or the web.

A few things to keep in mind while working on the component library:

- It's important to test your changes on all three platforms iOS, Android, and browsers as the project supports all three.
- Sometimes components need to be broken into other files component.js, component.web.js, component.ios, component.android.js to fix platform specific issues. When the user imports the component it will grab the correct on depending on the platform.
- When writing a component that has a few variations, do not create one component with a ton of `if`s. Instead create a few base components and use composition to create variations. Use TextField as an example.

### Storybook Environment

The storybook environment houses all of the components for development, but it also acts as the playground for the documentation. This means the storybook stories you write will appear in the docs for users to play with. Therefore stories should not only be functional but also serve as examples of how to use the component or display various options.

For more information about writing storybook stories, refer to [storybook documentation](https://storybook.js.org/docs/basics/introduction/)

### Docs

Documentation is built using [Gatsbyjs](https://www.gatsbyjs.org/).
It might be a good idea to follow their [introduction](https://www.gatsbyjs.org/docs/) to get familiar with how Gatsby works.

#### Set up

1. Cd into docs `cd docs`
2. Install dependencies by running `npm i` or `yarn`
3. Start the Gatsby server `npm run develop`

The site should be running at `localhost:8000`.

#### Developing

This project follows basic conventions in Gatsby. If you're wondering how pages are generated or the general structure, this is all covered in the [Gatsbyjs Guide](https://www.gatsbyjs.org/docs/preparing-your-environment/).

- Currently only very basic pages are generated and use a template, the rest are regular React components. This might be updated later.
- This project uses CSS modules and all styles are in `styles` folder.
- Follow folder convetion in place for Styles, all page styles go into the `styles/Pages/Page.module.css` etc etc

### Code style

- In general follow the code conventions already in place.
- If you have improvements to the coding style please make a separate issue in github so we can discuss it separately and apply it to all of the project.

### Making a PR

1. Create a new branch `git checkout -b branch-name` with your feature or fix
2. Make your changes
3. Make sure you tested on all three platforms
4. Make sure you updated the documentation,storybook stories/etc
5. Make a commit with a useful commit message `git commit -m 'implemented component x'`, this should run the linting and tests
6. Push to github `git push -u origin branch-name`
7. Make a PR on Github using the PR template
