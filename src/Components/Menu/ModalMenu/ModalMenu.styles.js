import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'static',
    zIndex: 9999,
  },
  bgTransparent: {
    backgroundColor: 'transparent',
  },
  bgNotTransparent: {
    backgroundColor: '#ffffff',
  },
  hidden: {
    display: 'none',
  },
  visible: {
    display: 'flex',
  },
});
