import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    flexGrow: 0,
    height: 32,
    alignSelf: 'flex-start',
  },
  ripple: {
    height: '100%',
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 0,
  },

  text: {
    lineHeight: 24,
    textAlignVertical: 'center',
    alignSelf: 'center',
    marginVertical: 4,

    fontSize: 14,
  },
});

export default styles;
