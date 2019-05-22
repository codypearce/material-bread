import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderBottomWidth: StyleSheet.hairlineWidth,
    minHeight: 48,

    flexDirection: 'row',
    alignItems: 'stretch',
    // width: '100%',
    minWidth: 'auto',
  },
  checkboxOffset: {
    width: 36,
    marginRight: 12,
  },
});

export default styles;
