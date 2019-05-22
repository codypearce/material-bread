import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: 'white',
  },

  content: {
    flexDirection: 'row',
    // flexShrink: 1,
  },

  buttons: {
    flexDirection: 'row',
    marginRight: 8,
    marginBottom: 8,
    flexShrink: 1,
    minWidth: 'auto',
  },
  button: {
    width: 'auto',
    marginLeft: 8,
  },
});

export default styles;
