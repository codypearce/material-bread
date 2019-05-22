import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    minWidth: '100%',
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    borderRadius: 4,
    position: 'relative',
  },
  innerView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 56,
    position: 'relative',
    zIndex: 2,
  },
  textfield: {
    width: '100%',
    minWidth: '100%',
  },
});

export default styles;
