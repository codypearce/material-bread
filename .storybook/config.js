import {
  addDecorator,
  configure,
  setAddon,
  addParameters,
} from '@storybook/react';
import { configureViewport } from '@storybook/addon-viewport';
import { withTests } from '@storybook/addon-jest';
import results from '../jest-test-results.json';
import '@storybook/addon-console';

// Generate required css
const iconFont = require('react-native-vector-icons/Fonts/MaterialIcons.ttf');
const iconFontStyles = `@font-face {
  src: url(${iconFont}); 
  font-family: MaterialIcons;
}`;

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    isToolshown: true,

    name: 'Material Bread',
  },
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'light', value: '#eeeeee' },
  ],
});

addDecorator(
  withTests({
    results,
  }),
);

function loadStories() {
  require('../storybook/stories');
}

configure(loadStories, module);

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}
// Inject stylesheet
document.head.appendChild(style);
