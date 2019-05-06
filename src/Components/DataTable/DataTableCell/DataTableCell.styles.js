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
    wordBreak: 'break-all',
  },
  text: {
    fontSize: 13,

    flexShrink: 0,
    flex: 1,
  },
  textHeader: {
    height: 24,
    lineHeight: 24,
    fontSize: 12,
    fontWeight: '500',
    alignItems: 'center',
    flexShrink: 0,
    flex: 1,
  },
  sortingIcon: {
    marginRight: 4,
  },
});

export default styles;
