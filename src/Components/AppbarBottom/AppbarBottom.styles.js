import { StyleSheet, Platform } from 'react-native';
import shadow from '../../Utils/Shadow/shadow';

const styles = StyleSheet.create({
  contianer: {},
  appbar: {
    height: 56,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    minWidth: 'auto',

    ...shadow(8),
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fabPos: {
    position: Platform.OS === 'android' ? 'relative' : 'absolute',
    zIndex: 100,
    elevation: Platform.OS === 'android' ? 10 : 0,
  },
  centerCut: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: Platform.OS === 'web' ? 'rgba(255,255,255,1)' : 'white',
    borderRadius: 56 + 16,
    transform: [{ translateY: -65 / 2 }],
    width: 56 + 16,
    height: 56 + 16,
  },
});

export default styles;
