import { configure } from '@storybook/react';
// Generate required css
const iconFont = require('react-native-vector-icons/Fonts/MaterialIcons.ttf');
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: MaterialIcons;
}`;

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
