import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  appbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minWidth: 'auto',
    zIndex: 2,
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  pageTitle: {
    fontSize: 18,
    color: 'white',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 'auto',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minWidth: 'auto',
  },
});

export default styles;
