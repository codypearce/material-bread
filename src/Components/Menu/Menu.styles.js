import { StyleSheet } from 'react-native';
import shadow from '../../Utils/Shadow/shadow';

const styles = StyleSheet.create({
  menuContainer: {
    top: -10, // Padding doesn't work because shows this component when hidden
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 200,
  },
  menu: {
    borderRadius: 6,
    position: 'absolute',
    left: 10,
    top: 10,
    backgroundColor: 'white',
    minWidth: 112,
    zIndex: 200,
    ...shadow(5),
  },
});

export default styles;
