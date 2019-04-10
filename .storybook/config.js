import { addDecorator, configure, setAddon } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { configureViewport } from '@storybook/addon-viewport';

// Generate required css
const iconFont = require('react-native-vector-icons/Fonts/MaterialIcons.ttf');
const iconFontStyles =
  '@font-face {src: url(${iconFont}); font-family: MaterialIcons;}';

configureViewport({
  defaultViewport: 'iphone6',
});

addDecorator(
  withOptions({
    name: 'Material Bread',

    // showAddonPanel: false,

    addonPanelInRight: true,
  }),
);

function loadStories() {
  require('../storybook/stories');
}

configure(loadStories, module);

// Create stylesheet
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = iconFontStyles;
  } else {
    style.appendChild(document.createTextNode(iconFontStyles));
  }
  // Inject stylesheet
  document.head.appendChild(style);
}
