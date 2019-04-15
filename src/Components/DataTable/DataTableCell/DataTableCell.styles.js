import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  dataTableItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'rgb(224, 224, 224)',
    paddingHorizontal: 16,
    paddingVertical: 4,
    minWidth: 'auto',
    flex: 1,
  },
  text: {
    fontSize: 13,
    color: 'rgba(0,0,0,.87)',
    flexShrink: 0,
    flex: 1,
  },
  textHeader: {
    color: 'rgba(0,0,0,.54)',
    height: 24,
    lineHeight: 24,
    fontSize: 12,
    fontWeight: '500',
    alignItems: 'center',
    flexShrink: 0,
    flex: 1,
  },
});

export default styles;
