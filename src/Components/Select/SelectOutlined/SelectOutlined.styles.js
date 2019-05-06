import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.6)',
    borderStyle: 'solid',
    padding: 16,
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
  buttonText: {
    color: 'rgba(0,0,0,0.6)',
    fontWeight: 'normal',
    fontSize: 16,
    letterSpacing: 0.2,
    margin: 0,
  },
  textSelected: {
    fontWeight: 'normal',
    fontSize: 12,
    letterSpacing: 0.2,
    position: 'absolute',
    backgroundColor: 'white',
    color: 'rgba(0,0,0,0.6)',
    top: -6,
    left: -5,
    zIndex: -1,
    paddingHorizontal: 5,
  },
});

export default styles;
