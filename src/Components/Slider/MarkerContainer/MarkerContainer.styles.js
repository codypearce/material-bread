import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  markerContainer: {
    position: 'absolute',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topMarkerContainer: {
    zIndex: 1,
  },
  touch: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});

export default styles;
