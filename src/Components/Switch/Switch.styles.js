import { StyleSheet } from 'react-native';
import { shadow } from '../..';

const styles = StyleSheet.create({
  track: {
    width: 36,
    height: 14,
    backgroundColor: 'rgba(0,0,0,.38)',
    borderRadius: 10,
    position: 'relative',
  },
  thumbRipple: {
    width: 32,
    height: 32,
    borderRadius: 100,
    position: 'absolute',
    top: -9,
    left: -8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumb: {
    width: 20,
    height: 20,
    ...shadow(3),
    borderRadius: 100,
  },
});

export default styles;
