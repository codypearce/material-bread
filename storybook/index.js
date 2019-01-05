import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';

// import stories
configure(() => {
  require('./stories');
}, module);

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({ port: 7007, host: 'localhost' });

// If you are using React Native vanilla write your app name here.
// If you use Expo you can safely remove this line.
// AppRegistry.registerComponent("testexample", () => StorybookUIRoot);

export default StorybookUIRoot;
