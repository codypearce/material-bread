import { Platform, Dimensions } from 'react-native';

const IPHONE_XS_HEIGHT = 812;
const IPHONE_XR_HEIGHT = 896;
const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');
export const hasNotch =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (WINDOW_HEIGHT === IPHONE_XS_HEIGHT ||
    WINDOW_WIDTH === IPHONE_XS_HEIGHT ||
    WINDOW_HEIGHT === IPHONE_XR_HEIGHT ||
    WINDOW_WIDTH === IPHONE_XR_HEIGHT);

export default hasNotch;
