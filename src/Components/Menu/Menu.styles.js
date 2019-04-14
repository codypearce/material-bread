import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  menuContainer: {
    left: -10, // Otherwise shadow of inner component is cut off on left
    top: -10, // Padding doesn't work because shows this component when hidden
    overflow: 'hidden',
    position: 'absolute',
  },
  menu: {
    borderRadius: 6,
    position: 'absolute',
    left: 10,
    top: 10,
    paddingVertical: 8,
    backgroundColor: 'white',
    ...shadow(5),
  },
});

export default styles;
