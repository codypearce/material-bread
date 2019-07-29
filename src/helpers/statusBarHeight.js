import { Platform } from 'react-native';

import hasNotch from './hasNotch';

let androidStatusBarHeight = 0;

const getStatusBarHeight = () => {
  if (Platform.OS === 'ios') {
    return hasNotch ? 44 : 20;
  } else if (Platform.OS === 'android') return androidStatusBarHeight;
  else return 0;
};

export default getStatusBarHeight;
