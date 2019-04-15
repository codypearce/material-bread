import { StyleSheet } from 'react-native';
import shadow from '../../Utils/Shadow/shadow';
const styles = StyleSheet.create({
  fullWidthContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  masafeAreaViewin: {
    position: 'absolute',
    left: 0,
    top: 5,
    zIndex: 0,
  },
  container: {
    position: 'absolute',
    left: 0,
    zIndex: 0,
    backgroundColor: 'black',
  },
  drawer: {
    position: 'absolute',

    backgroundColor: 'white',
    ...shadow(8),
  },
});

export default styles;
