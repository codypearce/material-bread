import { Platform } from 'react-native';

import web from './index.web';
import native from './index.native';

let index = native;
if (Platform.OS == 'web') {
  index = web;
}

export default index;
