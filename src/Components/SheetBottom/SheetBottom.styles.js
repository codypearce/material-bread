import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#00000077',
  },
  mask: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  container: {
    backgroundColor: '#fff',
    width: '100%',
    overflow: 'hidden',
    paddingVertical: 20,
    zIndex: 1000,
  },
});

export default styles;
