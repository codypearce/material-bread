import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ripple: {
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 24,
    borderWidth: 2,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
  },
});

export default styles;
